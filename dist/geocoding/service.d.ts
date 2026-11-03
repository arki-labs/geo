/**
 * Geocoding Service
 *
 * A wrapper around node-geocoder providing:
 * - Multiple provider support (Google Maps, Mapbox, Nominatim, LocationIQ, HERE, OpenCage, Geocodio)
 * - Provider fallback chain for reliability
 * - KV-based caching (30-day TTL)
 * - Batch geocoding with concurrency control
 * - Type-safe configuration
 *
 * Every expected outcome is returned, never thrown: a result, "nothing found",
 * "rate limited" (with the provider's Retry-After), "provider refused",
 * "provider unreachable" or "cancelled".
 */
import type { KV } from '@arki/kv';
import { GeocodingCancelled } from '../core/failures.js';
import type { GeocodingConfig, GeocodingProvider } from './types.js';
/** The slice of `KV` the service needs. Any store with `get` and `set` fits. */
export type GeocodingCache = Pick<KV, 'get' | 'set'>;
/**
 * Options shared by every lookup.
 *
 * `signal` cancels the lookup. It is passed to the HTTP request of each
 * provider, so an in-flight request is cut off. A cancelled lookup returns
 * `GeocodingCancelled`.
 */
export type GeocodingOptions = {
    signal?: AbortSignal;
};
/** What a forward or reverse lookup returns. */
export type GeocodeOutcome = Awaited<ReturnType<GeocodingService['geocode']>>;
/** What `batchGeocode` records for one address: everything a lookup returns except cancellation. */
export type BatchGeocodeEntry = Exclude<GeocodeOutcome, ReturnType<typeof GeocodingCancelled>>;
export declare class GeocodingService {
    private providerOptions;
    private primaryProvider;
    private fallbackProviders;
    private kv?;
    private cacheEnabled;
    private cacheTTL;
    private cacheKeyPrefix;
    private timeoutMs;
    /** The configured API keys in every form they can appear in a message. Removed from each provider message. */
    private secrets;
    constructor(config: GeocodingConfig, kv?: GeocodingCache);
    /**
     * Geocode an address to coordinates.
     *
     * Returns `AddressNotFound` when every provider that answered found nothing
     * (a provider with no results passes to the next one). When no provider
     * answered at all, returns `ProviderRateLimited`, `ProviderUnreachable` or
     * `ProviderRejected`, each listing every attempt. Returns `GeocodingCancelled`
     * when the signal aborts. A cache fault is logged and treated as a miss.
     */
    geocode(address: string, preferredProvider?: GeocodingProvider, options?: GeocodingOptions): Promise<import("@arki/failure").Failure<"geo.address_not_found", {
        address: string;
    }> | import("@arki/failure").Failure<"geo.cancelled", undefined> | import("@arki/failure").Failure<"geo.provider_rate_limited", {
        provider: string;
        attempts: {
            provider: string;
            kind: "rate_limited" | "rejected" | "unreachable";
            message: string;
        }[];
        retryAfterMs?: number | undefined;
    }> | import("@arki/failure").Failure<"geo.provider_rejected", {
        provider: string;
        attempts: {
            provider: string;
            kind: "rate_limited" | "rejected" | "unreachable";
            message: string;
        }[];
    }> | import("@arki/failure").Failure<"geo.provider_unreachable", {
        provider: string;
        attempts: {
            provider: string;
            kind: "rate_limited" | "rejected" | "unreachable";
            message: string;
        }[];
    }> | {
        latitude: number;
        longitude: number;
        formattedAddress: string;
        addressComponents: {
            streetAddress?: string | undefined;
            locality?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
        };
        placeId?: string | undefined;
        provider: "geocodio" | "google" | "here" | "locationiq" | "mapbox" | "nominatim" | "opencage";
    }>;
    /**
     * Reverse geocode coordinates to an address.
     *
     * Returns `InvalidCoordinates` for a latitude or longitude that is not
     * finite or out of range, and `NoAddressAtLocation` when every provider that
     * answered found no address there (a provider with no results passes to the
     * next one). Provider faults and cancellation are returned as for `geocode`.
     */
    reverseGeocode(lat: number, lon: number, preferredProvider?: GeocodingProvider, options?: GeocodingOptions): Promise<import("@arki/failure").Failure<"geo.cancelled", undefined> | import("@arki/failure").Failure<"geo.invalid_coordinates", {
        reason: string;
    }> | import("@arki/failure").Failure<"geo.no_address_at_location", {
        latitude: number;
        longitude: number;
    }> | import("@arki/failure").Failure<"geo.provider_rate_limited", {
        provider: string;
        attempts: {
            provider: string;
            kind: "rate_limited" | "rejected" | "unreachable";
            message: string;
        }[];
        retryAfterMs?: number | undefined;
    }> | import("@arki/failure").Failure<"geo.provider_rejected", {
        provider: string;
        attempts: {
            provider: string;
            kind: "rate_limited" | "rejected" | "unreachable";
            message: string;
        }[];
    }> | import("@arki/failure").Failure<"geo.provider_unreachable", {
        provider: string;
        attempts: {
            provider: string;
            kind: "rate_limited" | "rejected" | "unreachable";
            message: string;
        }[];
    }> | {
        latitude: number;
        longitude: number;
        formattedAddress: string;
        addressComponents: {
            streetAddress?: string | undefined;
            locality?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
        };
        placeId?: string | undefined;
        provider: "geocodio" | "google" | "here" | "locationiq" | "mapbox" | "nominatim" | "opencage";
    }>;
    /**
     * Batch geocode multiple addresses
     * Processes in parallel with rate limiting
     *
     * Each address maps to what `geocode` returned for it. An empty or blank
     * address is recorded as `AddressNotFound` without asking a provider, and
     * never stops the batch. Returns `GeocodingCancelled` if the signal aborts,
     * and starts no new lookups after that. `concurrency` must be a whole
     * number of at least 1; anything else is a bug in the caller and throws.
     */
    batchGeocode(addresses: string[], concurrency?: number, options?: GeocodingOptions): Promise<import("@arki/failure").Failure<"geo.cancelled", undefined> | Map<string, BatchGeocodeEntry>>;
    /**
     * Ask each provider in order until one answers with a result.
     * `isNoAddress` says whether a thrown error means "found nothing" instead of "provider fault".
     */
    private lookup;
    /** Replaces every configured API key in `text` with `[redacted]`. */
    private redactSecrets;
    /**
     * The failure for a lookup where no provider gave an answer. Rate limit wins
     * (it names when to retry), then unreachable (a retry may work), then refused.
     * No configured provider at all counts as unreachable with no attempts.
     */
    private providerFailure;
    /** A stored answer, or undefined on a miss. A cache fault or a stored value of the wrong shape is a miss, never an error. */
    private readCache;
    /** Store an answer. A cache fault is logged and the good answer is still returned. */
    private writeCache;
    /**
     * Providers to try, in order: the preferred one (if any), then the primary,
     * then the fallbacks. Each provider appears once.
     */
    private getProviderOrder;
    /**
     * Transform node-geocoder Entry to our GeocodeResult format.
     * An entry without usable coordinates is no result: it is never turned into (0, 0).
     */
    private transformResult;
    /**
     * Hash address for cache key generation
     */
    private hashAddress;
}
/**
 * Create geocoding service instance from configuration
 */
export declare function createGeocodingService(config: GeocodingConfig, kv?: GeocodingCache): GeocodingService;
