/**
 * usePolylineAnimation hook
 *
 * Provides utilities for animating polylines (marching ants effect).
 */
import type { Coordinates } from '../types/index.js';
export type PolylineData = {
    /**
     * Start coordinate
     */
    start: Coordinates;
    /**
     * End coordinate
     */
    end: Coordinates;
    /**
     * Optional custom color
     */
    color?: string;
    /**
     * Optional color index (if using palette)
     */
    colorIndex?: number;
    /**
     * Optional opacity (0-1)
     * @default 1.0
     */
    opacity?: number;
    /**
     * Optional stroke weight (line thickness)
     * @default 2
     */
    strokeWeight?: number;
};
export type UsePolylineAnimationOptions = {
    /**
     * Animation interval in milliseconds
     * @default 50
     */
    interval?: number;
    /**
     * Whether animations are enabled
     * @default true
     */
    enabled?: boolean;
};
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
export declare function usePolylineAnimation(polylines: PolylineData[], options?: UsePolylineAnimationOptions): {
    clearPolylines: () => void;
};
