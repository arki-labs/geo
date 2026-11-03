/**
 * Type definitions for the geocoding service
 */
import { z } from 'zod';
/** Every supported provider, written once. The type, the env enum and the cache schema all read it. */
export declare const GEOCODING_PROVIDERS: readonly ['google', 'mapbox', 'nominatim', 'locationiq', 'here', 'opencage', 'geocodio'];
/**
 * Supported geocoding providers
 */
export type GeocodingProvider = (typeof GEOCODING_PROVIDERS)[number];
/**
 * Address components following Schema.org PostalAddress structure.
 * `locality` is the city, `region` the state or province, `country` an ISO 3166-1 alpha-2 code.
 */
export declare const addressComponentsSchema: z.ZodObject<{
    streetAddress: z.ZodOptional<z.ZodString>;
    locality: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AddressComponents = z.infer<typeof addressComponentsSchema>;
/**
 * Result from geocoding operation. Also the shape read back from the cache.
 */
export declare const geocodeResultSchema: z.ZodObject<{
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    formattedAddress: z.ZodString;
    addressComponents: z.ZodObject<{
        streetAddress: z.ZodOptional<z.ZodString>;
        locality: z.ZodOptional<z.ZodString>;
        region: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    placeId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        geocodio: "geocodio";
        google: "google";
        here: "here";
        locationiq: "locationiq";
        mapbox: "mapbox";
        nominatim: "nominatim";
        opencage: "opencage";
    }>;
}, z.core.$strip>;
export type GeocodeResult = z.infer<typeof geocodeResultSchema>;
/**
 * Configuration for geocoding service
 */
export type GeocodingConfig = {
    provider: GeocodingProvider;
    fallbackProviders: GeocodingProvider[];
    google: {
        enabled: boolean;
        apiKey?: string;
    };
    mapbox: {
        enabled: boolean;
        accessToken?: string;
    };
    nominatim: {
        enabled: boolean;
        baseUrl?: string;
    };
    locationiq: {
        enabled: boolean;
        apiKey?: string;
    };
    here: {
        enabled: boolean;
        apiKey?: string;
        appId?: string;
    };
    opencage: {
        enabled: boolean;
        apiKey?: string;
    };
    geocodio: {
        enabled: boolean;
        apiKey?: string;
    };
    cache: {
        enabled: boolean;
        ttl: number;
        keyPrefix: string;
    };
    /** Longest wait for one provider answer, in milliseconds. Default 10000. */
    timeoutMs?: number;
};
