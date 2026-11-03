/**
 * Polyline utilities
 */
import type { Coordinates } from '../types/index.js';
/**
 * Create marching ants animation for a polyline
 *
 * @param polyline The Google Maps polyline instance
 * @param interval Animation interval in milliseconds
 * @returns Cleanup function to stop the animation
 */
export declare function createMarchingAntsAnimation(polyline: google.maps.Polyline, interval?: number): () => void;
/**
 * Create dashed polyline configuration
 */
export declare function createDashedPolylineConfig(color?: string): google.maps.PolylineOptions;
/**
 * Create solid polyline configuration
 */
export declare function createSolidPolylineConfig(color?: string, weight?: number): google.maps.PolylineOptions;
/**
 * Create polyline path from two points
 */
export declare function createPolylinePath(start: Coordinates, end: Coordinates): google.maps.LatLng[];
