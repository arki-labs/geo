/**
 * The Zod schemas of the geocoding types, offered to callers by `@arki/geo/zod`. The TS types in `types.ts`
 * are the source; `zod.test.ts` locks each schema to its type both ways. They live apart from `types.ts` so
 * `./geocoding` names no Zod type (`TYPES_E001`).
 */
import { z } from 'zod';
/** An `AddressComponents`. */
export declare const addressComponentsSchema: z.ZodObject<{
    streetAddress: z.ZodOptional<z.ZodString>;
    locality: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/** A `GeocodeResult`, also the shape read back from the cache. */
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
