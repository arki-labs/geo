import type { Coordinates, Direction, DistanceUnit } from './types.js';
/**
 * Calculate the great-circle distance between two points using the Haversine formula
 * @param point1 - First coordinate
 * @param point2 - Second coordinate
 * @param unit - Unit of measurement (default: 'km')
 * @returns Distance in specified unit
 */
export declare function calculateDistance(point1: Coordinates, point2: Coordinates, unit?: DistanceUnit): number;
/**
 * Calculate the bearing (direction) from point1 to point2
 * @param point1 - Starting coordinate
 * @param point2 - Ending coordinate
 * @returns Bearing in degrees (0-360, where 0/360 is North)
 */
export declare function calculateBearing(point1: Coordinates, point2: Coordinates): number;
/**
 * Get compass direction from bearing
 * @param bearing - Bearing in degrees (0-360)
 * @returns Cardinal or intercardinal direction
 */
export declare function bearingToDirection(bearing: number): Direction;
/**
 * Calculate the midpoint between two coordinates
 * @param point1 - First coordinate
 * @param point2 - Second coordinate
 * @returns Midpoint coordinates
 */
export declare function calculateMidpoint(point1: Coordinates, point2: Coordinates): Coordinates;
/**
 * Calculate destination point given distance and bearing from start point
 * @param point - Starting coordinate
 * @param distance - Distance in kilometers
 * @param bearing - Bearing in degrees (0-360)
 * @returns Destination coordinates
 */
export declare function calculateDestination(point: Coordinates, distance: number, bearing: number): Coordinates;
/**
 * Convert distance between units
 * @param distance - Distance value
 * @param fromUnit - Source unit
 * @param toUnit - Target unit
 * @returns Converted distance
 */
export declare function convertDistance(distance: number, fromUnit: DistanceUnit, toUnit: DistanceUnit): number;
