/**
 * Default configuration constants for Google Maps
 */
import type { Coordinates } from '../../core/types.js';
/**
 * Default map center (middle of the world)
 */
export declare const DEFAULT_MAP_CENTER: Coordinates;
/**
 * Default map zoom level
 */
export declare const DEFAULT_MAP_ZOOM = 2;
/**
 * Default map ID for standard maps
 */
export declare const DEFAULT_MAP_ID = "arki-map";
/**
 * Default bounds padding in pixels
 */
export declare const DEFAULT_BOUNDS_PADDING = 40;
/**
 * Highlighted bounds padding (more zoom for detail)
 */
export declare const HIGHLIGHTED_BOUNDS_PADDING = 100;
/**
 * Default marker colors (8-color palette for rounds/items)
 */
export declare const MARKER_COLORS: readonly ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
/**
 * Default polyline animation interval (ms)
 */
export declare const POLYLINE_ANIMATION_INTERVAL = 50;
/**
 * Default polyline dash length
 */
export declare const POLYLINE_DASH_LENGTH = 10;
/**
 * Default polyline gap length
 */
export declare const POLYLINE_GAP_LENGTH = 10;
