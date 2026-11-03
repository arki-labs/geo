/**
 * Map configuration utilities
 */
import type { GoogleMapProps } from '../primitives/index.js';
/**
 * Default map configuration for common use cases
 */
export declare const DEFAULT_MAP_CONFIG: Partial<GoogleMapProps>;
/**
 * Map configuration for location selection
 */
export declare const LOCATION_PICKER_CONFIG: Partial<GoogleMapProps>;
/**
 * Map configuration for result visualization
 */
export declare const RESULTS_MAP_CONFIG: Partial<GoogleMapProps>;
/**
 * Map configuration for disabled interaction
 */
export declare const STATIC_MAP_CONFIG: Partial<GoogleMapProps>;
/**
 * Create custom map configuration
 */
export declare function createMapConfig(overrides?: Partial<GoogleMapProps>): Partial<GoogleMapProps>;
