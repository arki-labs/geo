/**
 * Coordinate and map-related formatters
 */
import type { Coordinates } from '../types/index.js';
/**
 * Format coordinates to a readable string
 *
 * `precision` (default 4) is a finite number from 0 to 100; anything else throws the invariant
 * failure `ARKI_FAILURE_E008`, a caller bug.
 *
 * @example
 * formatCoordinates({ lat: 37.7749, lng: -122.4194 })
 * // Returns: "37.7749, -122.4194"
 */
export declare function formatCoordinates(coords: Coordinates, precision?: number): string;
/**
 * Format coordinates with cardinal directions
 *
 * `precision` (default 4) is a finite number from 0 to 100; anything else throws the invariant
 * failure `ARKI_FAILURE_E008`, a caller bug.
 *
 * @example
 * formatCoordinatesWithCardinals({ lat: 37.7749, lng: -122.4194 })
 * // Returns: "37.7749°N, 122.4194°W"
 */
export declare function formatCoordinatesWithCardinals(coords: Coordinates, precision?: number): string;
/**
 * Format zoom level to descriptive text
 */
export declare function formatZoomLevel(zoom: number): string;
export { parseCoordinates } from '../../../core/coordinates.js';
