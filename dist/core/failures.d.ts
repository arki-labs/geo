/**
 * The expected ways a geo lookup can fail, each defined once. They are
 * returned, not thrown: a correct caller must branch on them.
 */
import { z } from 'zod';
/** Every provider that answered found nothing for this address. Not cached, so a later lookup asks again.
 * @fix Check the address for typos, or add detail such as the city and country.
 * @verify bun run test -- src/geocoding/service.test.ts
 */
export declare const AddressNotFound: import("@arki/failure").FailureDefinition<"geo.address_not_found", import("@standard-schema/spec").StandardSchemaV1<{
    address: string;
}, {
    address: string;
}>>;
/** Every provider that answered found no address at these coordinates, such as a point at sea. Not cached.
 * @fix Check the coordinates are latitude then longitude, or treat the place as having no address.
 * @verify bun run test -- src/geocoding/service.test.ts
 */
export declare const NoAddressAtLocation: import("@arki/failure").FailureDefinition<"geo.no_address_at_location", import("@standard-schema/spec").StandardSchemaV1<{
    latitude: number;
    longitude: number;
}, {
    latitude: number;
    longitude: number;
}>>;
/** Coordinates, or text that should hold coordinates, are not a valid latitude and longitude. Nothing was looked up.
 * @fix Send finite numbers: latitude from -90 to 90, longitude from -180 to 180. Text must read "lat, lng".
 * @verify bun run test -- src/core/coordinates.test.ts
 */
export declare const InvalidCoordinates: import("@arki/failure").FailureDefinition<"geo.invalid_coordinates", import("@standard-schema/spec").StandardSchemaV1<{
    reason: string;
}, {
    reason: string;
}>>;
/** The lookup was cancelled through its `AbortSignal`. This is not a provider fault.
 * @fix Do not retry unless the caller still wants the result. Pass a fresh signal if it does.
 * @verify bun run test -- src/geocoding/service.test.ts
 */
export declare const GeocodingCancelled: import("@arki/failure").FailureDefinition<"geo.cancelled", undefined>;
/** One provider's failed try, kept so a failure that ends the lookup still shows every provider. */
export declare const providerAttemptSchema: z.ZodObject<{
    provider: z.ZodString;
    kind: z.ZodEnum<{
        rate_limited: "rate_limited";
        rejected: "rejected";
        unreachable: "unreachable";
    }>;
    message: z.ZodString;
}, z.core.$strip>;
/** No provider answered and at least one said it is over its limit. `retryAfterMs` is that provider's `Retry-After`, when it sent one.
 * @fix Wait `retryAfterMs` (or back off) and retry, or add a provider to the fallback list.
 * @verify bun run test -- src/geocoding/service.test.ts
 */
export declare const ProviderRateLimited: import("@arki/failure").FailureDefinition<"geo.provider_rate_limited", import("@standard-schema/spec").StandardSchemaV1<{
    provider: string;
    attempts: {
        provider: string;
        kind: "rate_limited" | "rejected" | "unreachable";
        message: string;
    }[];
    retryAfterMs?: number | undefined;
}, {
    provider: string;
    attempts: {
        provider: string;
        kind: "rate_limited" | "rejected" | "unreachable";
        message: string;
    }[];
    retryAfterMs?: number | undefined;
}>>;
/** No provider answered and at least one refused the request: a bad or missing key, a denied account, or a malformed request. Retrying gives the same answer.
 * @fix Check the provider's API key and plan in the configuration, then retry.
 * @verify bun run test -- src/geocoding/service.test.ts
 */
export declare const ProviderRejected: import("@arki/failure").FailureDefinition<"geo.provider_rejected", import("@standard-schema/spec").StandardSchemaV1<{
    provider: string;
    attempts: {
        provider: string;
        kind: "rate_limited" | "rejected" | "unreachable";
        message: string;
    }[];
}, {
    provider: string;
    attempts: {
        provider: string;
        kind: "rate_limited" | "rejected" | "unreachable";
        message: string;
    }[];
}>>;
/** No provider answered: each was down, timed out, or sent an unreadable answer. A later retry may work.
 * @fix Retry later, or add a fallback provider.
 * @verify bun run test -- src/geocoding/service.test.ts
 */
export declare const ProviderUnreachable: import("@arki/failure").FailureDefinition<"geo.provider_unreachable", import("@standard-schema/spec").StandardSchemaV1<{
    provider: string;
    attempts: {
        provider: string;
        kind: "rate_limited" | "rejected" | "unreachable";
        message: string;
    }[];
}, {
    provider: string;
    attempts: {
        provider: string;
        kind: "rate_limited" | "rejected" | "unreachable";
        message: string;
    }[];
}>>;
export type ProviderAttempt = z.infer<typeof providerAttemptSchema>;
export type InvalidCoordinates = ReturnType<typeof InvalidCoordinates>;
export type GeocodingCancelled = ReturnType<typeof GeocodingCancelled>;
export type ProviderRateLimited = ReturnType<typeof ProviderRateLimited>;
export type ProviderRejected = ReturnType<typeof ProviderRejected>;
export type ProviderUnreachable = ReturnType<typeof ProviderUnreachable>;
