'use client';
import { useMemo } from 'react';
import { createBoundsFromCoordinates, createBoundsFromRadius, getBoundsCenter, getBoundsRadius, isCoordinateInBounds, } from '../../core/bounds.js';
/**
 * Hook to calculate and work with bounds
 * @param coordinates - Array of coordinates to create bounds from
 * @returns Bounds information and utility functions
 */
export function useBoundsFromCoordinates(coordinates) {
    const bounds = useMemo(() => {
        if (coordinates.length === 0)
            return null;
        return createBoundsFromCoordinates(coordinates);
    }, [coordinates]);
    const center = useMemo(() => {
        if (!bounds)
            return null;
        return getBoundsCenter(bounds);
    }, [bounds]);
    const radius = useMemo(() => {
        if (!bounds)
            return null;
        return getBoundsRadius(bounds);
    }, [bounds]);
    const contains = useMemo(() => {
        if (!bounds)
            return () => false;
        return (coord) => isCoordinateInBounds(coord, bounds);
    }, [bounds]);
    return {
        bounds,
        center,
        radius,
        contains,
    };
}
/**
 * Hook to create bounds from a center point and radius
 * @param center - Center coordinate
 * @param radiusKm - Radius in kilometers
 * @returns Bounds information
 */
export function useBoundsFromRadius(center, radiusKm) {
    const bounds = useMemo(() => {
        if (!center)
            return null;
        return createBoundsFromRadius(center, radiusKm);
    }, [center, radiusKm]);
    const contains = useMemo(() => {
        if (!bounds)
            return () => false;
        return (coord) => isCoordinateInBounds(coord, bounds);
    }, [bounds]);
    return {
        bounds,
        center,
        radius: radiusKm,
        contains,
    };
}
//# sourceMappingURL=useBounds.js.map