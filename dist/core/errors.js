/**
 * Base error class for all geo-related errors
 */
export class GeoError extends Error {
    code;
    cause;
    constructor(message, code, cause) {
        super(message);
        this.code = code;
        this.cause = cause;
        this.name = 'GeoError';
    }
}
/**
 * Error thrown when map provider initialization fails
 */
export class MapProviderError extends GeoError {
    provider;
    constructor(message, provider, cause) {
        super(message, 'MAP_PROVIDER_ERROR', cause);
        this.provider = provider;
        this.name = 'MapProviderError';
    }
}
/**
 * Error thrown when bounds calculations fail
 */
export class BoundsError extends GeoError {
    constructor(message, cause) {
        super(message, 'BOUNDS_ERROR', cause);
        this.name = 'BoundsError';
    }
}
//# sourceMappingURL=errors.js.map