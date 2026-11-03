/**
 * Coordinate and map-related formatters
 */
import type { Coordinates } from '../types/index.js';
/**
 * Format coordinates to a readable string
 *
 * @example
 * formatCoordinates({ lat: 37.7749, lng: -122.4194 })
 * // Returns: "37.7749, -122.4194"
 */
export declare function formatCoordinates(coords: Coordinates, precision?: number): string;
/**
 * Format coordinates with cardinal directions
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
/**
 * Parse coordinates from string
 *
 * @example
 * parseCoordinates("37.7749, -122.4194")
 * // Returns: { lat: 37.7749, lng: -122.4194 }
 */
export declare function parseCoordinates(coordString: string): Coordinates | null;
