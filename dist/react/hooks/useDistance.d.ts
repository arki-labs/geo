import type { Coordinates, DistanceUnit } from '../../core/types.js';
/**
 * Hook to calculate distance between two coordinates
 * @param point1 - First coordinate
 * @param point2 - Second coordinate
 * @param unit - Unit of measurement (default: 'km')
 * @returns Distance in specified unit, or null if either coordinate is null
 */
export declare function useDistance(point1: Coordinates | null, point2: Coordinates | null, unit?: DistanceUnit): number | null;
