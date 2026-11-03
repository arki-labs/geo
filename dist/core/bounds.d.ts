import type { Bounds, Coordinates } from './types.js';
/**
 * Create bounds from an array of coordinates
 * @param coordinates - Array of coordinates
 * @returns Bounding box
 * @throws BoundsError if array is empty
 */
export declare function createBoundsFromCoordinates(coordinates: Coordinates[]): Bounds;
/**
 * Create bounds from a center point and radius
 * @param center - Center coordinate
 * @param radiusKm - Radius in kilometers
 * @returns Bounding box
 */
export declare function createBoundsFromRadius(center: Coordinates, radiusKm: number): Bounds;
/**
 * Check if a coordinate is within bounds
 * @param coord - Coordinate to check
 * @param bounds - Bounding box
 * @returns true if coordinate is within bounds
 */
export declare function isCoordinateInBounds(coord: Coordinates, bounds: Bounds): boolean;
/**
 * Get the center coordinate of bounds
 * @param bounds - Bounding box
 * @returns Center coordinate
 */
export declare function getBoundsCenter(bounds: Bounds): Coordinates;
/**
 * Get the approximate radius of bounds in kilometers
 * Uses the distance from center to the furthest corner
 * @param bounds - Bounding box
 * @returns Radius in kilometers
 */
export declare function getBoundsRadius(bounds: Bounds): number;
/**
 * Extend bounds to include a coordinate
 * @param bounds - Existing bounds
 * @param coord - Coordinate to include
 * @returns Extended bounds
 */
export declare function extendBounds(bounds: Bounds, coord: Coordinates): Bounds;
/**
 * Check if two bounds intersect
 * @param bounds1 - First bounds
 * @param bounds2 - Second bounds
 * @returns true if bounds intersect
 */
export declare function boundsIntersect(bounds1: Bounds, bounds2: Bounds): boolean;
/**
 * Check if bounds1 contains bounds2
 * @param bounds1 - Outer bounds
 * @param bounds2 - Inner bounds
 * @returns true if bounds1 completely contains bounds2
 */
export declare function boundsContains(bounds1: Bounds, bounds2: Bounds): boolean;
/**
 * Pad bounds by a percentage
 * @param bounds - Bounds to pad
 * @param percent - Percentage to pad (e.g., 0.1 for 10%)
 * @returns Padded bounds
 */
export declare function padBounds(bounds: Bounds, percent: number): Bounds;
/**
 * Format bounds as a string
 * @param bounds - Bounds to format
 * @param precision - Number of decimal places (default: 6)
 * @returns Formatted string like "N:40.7128 S:40.7000 E:-74.0000 W:-74.0060"
 */
export declare function formatBounds(bounds: Bounds, precision?: number): string;
