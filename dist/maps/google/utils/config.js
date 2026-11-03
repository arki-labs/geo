/**
 * Map configuration utilities
 */
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../constants.js';
/**
 * Default map configuration for common use cases
 */
export const DEFAULT_MAP_CONFIG = {
    center: DEFAULT_MAP_CENTER,
    zoom: DEFAULT_MAP_ZOOM,
    gestureHandling: 'greedy',
    disableDefaultUI: true,
    clickableIcons: false,
};
/**
 * Map configuration for location selection
 */
export const LOCATION_PICKER_CONFIG = {
    ...DEFAULT_MAP_CONFIG,
    gestureHandling: 'greedy',
};
/**
 * Map configuration for result visualization
 */
export const RESULTS_MAP_CONFIG = {
    ...DEFAULT_MAP_CONFIG,
    mapTypeId: 'satellite',
    gestureHandling: 'greedy',
};
/**
 * Map configuration for disabled interaction
 */
export const STATIC_MAP_CONFIG = {
    ...DEFAULT_MAP_CONFIG,
    gestureHandling: 'none',
};
/**
 * Create custom map configuration
 */
export function createMapConfig(overrides = {}) {
    return {
        ...DEFAULT_MAP_CONFIG,
        ...overrides,
    };
}
//# sourceMappingURL=config.js.map