/**
 * Base error class for all geo-related errors
 */
export declare class GeoError extends Error {
    readonly code: string;
    readonly cause?: unknown;
    constructor(message: string, code: string, cause?: unknown);
}
/**
 * Error thrown when map provider initialization fails
 */
export declare class MapProviderError extends GeoError {
    readonly provider: string;
    constructor(message: string, provider: string, cause?: unknown);
}
/**
 * Error thrown when bounds calculations fail
 */
export declare class BoundsError extends GeoError {
    constructor(message: string, cause?: unknown);
}
