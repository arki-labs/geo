/**
 * Type definitions for the geocoding service
 */
import { z } from 'zod';
/** Every supported provider, written once. The type, the env enum and the cache schema all read it. */
export const GEOCODING_PROVIDERS = [
    'google',
    'mapbox',
    'nominatim',
    'locationiq',
    'here',
    'opencage',
    'geocodio',
];
/**
 * Address components following Schema.org PostalAddress structure.
 * `locality` is the city, `region` the state or province, `country` an ISO 3166-1 alpha-2 code.
 */
export const addressComponentsSchema = z.object({
    streetAddress: z.string().optional(),
    locality: z.string().optional(),
    region: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional(),
});
/**
 * Result from geocoding operation. Also the shape read back from the cache.
 */
export const geocodeResultSchema = z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    formattedAddress: z.string(),
    addressComponents: addressComponentsSchema,
    placeId: z.string().optional(),
    provider: z.enum(GEOCODING_PROVIDERS),
});
//# sourceMappingURL=types.js.map