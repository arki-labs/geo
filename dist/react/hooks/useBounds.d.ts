import type { Bounds, Coordinates } from '../../core/types.js';
export type UseBoundsReturn = {
    bounds: Bounds | null;
    center: Coordinates | null;
    radius: number | null;
    contains: (coord: Coordinates) => boolean;
};
/**
 * Hook to calculate and work with bounds
 * @param coordinates - Array of coordinates to create bounds from
 * @returns Bounds information and utility functions
 */
export declare function useBoundsFromCoordinates(coordinates: Coordinates[]): UseBoundsReturn;
/**
 * Hook to create bounds from a center point and radius
 * @param center - Center coordinate
 * @param radiusKm - Radius in kilometers
 * @returns Bounds information
 */
export declare function useBoundsFromRadius(center: Coordinates | null, radiusKm: number): UseBoundsReturn;
