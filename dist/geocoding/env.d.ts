export declare const geocodingEnv: Readonly<{
    GEOCODING_PROVIDER: "geocodio" | "google" | "here" | "locationiq" | "mapbox" | "nominatim" | "opencage";
    GEOCODING_FALLBACK_PROVIDERS: string;
    GOOGLE_MAPS_API_KEY?: string | undefined;
    MAPBOX_ACCESS_TOKEN?: string | undefined;
    NOMINATIM_BASE_URL?: string | undefined;
    LOCATIONIQ_API_KEY?: string | undefined;
    HERE_API_KEY?: string | undefined;
    HERE_APP_ID?: string | undefined;
    OPENCAGE_API_KEY?: string | undefined;
    GEOCODIO_API_KEY?: string | undefined;
    GEOCODING_CACHE_ENABLED: boolean;
    GEOCODING_CACHE_TTL: number;
    GEOCODING_CACHE_KEY_PREFIX: string;
}>;
export type GeocodingEnv = typeof geocodingEnv;
