/**
 * usePolylineAnimation hook
 *
 * Provides utilities for animating polylines (marching ants effect).
 */
import { useCallback, useEffect, useRef } from 'react';
import { POLYLINE_ANIMATION_INTERVAL } from '../constants.js';
import { createMarchingAntsAnimation, createDashedPolylineConfig, createPolylinePath } from '../utils/polyline.js';
import { getMarkerColor } from '../utils/colors.js';
import { useGoogleMap } from './useGoogleMap.js';
import { useGoogleMaps } from './useGoogleMaps.js';
/**
 * Hook to manage animated polylines on a map
 *
 * Creates and animates polylines with a "marching ants" effect.
 *
 * @param polylines Array of polyline data
 * @param options Configuration options
 *
 * @example
 * ```tsx
 * function MyMap() {
 *   const polylines = [
 *     { start: { lat: 0, lng: 0 }, end: { lat: 10, lng: 10 }, colorIndex: 0 },
 *     { start: { lat: 5, lng: 5 }, end: { lat: 15, lng: 15 }, color: '#FF0000' },
 *   ];
 *
 *   usePolylineAnimation(polylines);
 *
 *   return <GoogleMap>...</GoogleMap>;
 * }
 * ```
 */
export function usePolylineAnimation(polylines, options = {}) {
    const { interval = POLYLINE_ANIMATION_INTERVAL, enabled = true } = options;
    const map = useGoogleMap();
    const mapsLibrary = useGoogleMaps();
    const polylinesRef = useRef([]);
    const cleanupFnsRef = useRef([]);
    useEffect(() => {
        if (!map || !mapsLibrary || !enabled || polylines.length === 0)
            return;
        // Clear existing polylines
        for (const polyline of polylinesRef.current) {
            polyline.setMap(null);
        }
        for (const cleanup of cleanupFnsRef.current) {
            cleanup();
        }
        polylinesRef.current = [];
        cleanupFnsRef.current = [];
        // Create new polylines
        for (const [index, data] of polylines.entries()) {
            const color = data.color || (data.colorIndex === undefined ? getMarkerColor(index) : getMarkerColor(data.colorIndex));
            const path = createPolylinePath(data.start, data.end);
            const config = createDashedPolylineConfig(color);
            const polyline = new mapsLibrary.Polyline({
                ...config,
                path,
                map,
                strokeOpacity: data.opacity ?? 1,
                strokeWeight: data.strokeWeight ?? 2,
            });
            polylinesRef.current.push(polyline);
            // Start marching ants animation
            const cleanup = createMarchingAntsAnimation(polyline, interval);
            cleanupFnsRef.current.push(cleanup);
        }
        // Cleanup on unmount or when dependencies change
        return () => {
            for (const polyline of polylinesRef.current) {
                polyline.setMap(null);
            }
            for (const cleanup of cleanupFnsRef.current) {
                cleanup();
            }
            polylinesRef.current = [];
            cleanupFnsRef.current = [];
        };
    }, [map, mapsLibrary, polylines, interval, enabled]);
    /**
     * Manually clear all polylines
     */
    const clearPolylines = useCallback(() => {
        for (const polyline of polylinesRef.current) {
            polyline.setMap(null);
        }
        for (const cleanup of cleanupFnsRef.current) {
            cleanup();
        }
        polylinesRef.current = [];
        cleanupFnsRef.current = [];
    }, []);
    return {
        clearPolylines,
    };
}
//# sourceMappingURL=usePolylineAnimation.js.map