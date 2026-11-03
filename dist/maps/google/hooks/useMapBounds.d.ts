/**
 * useMapBounds hook
 *
 * Provides utilities for calculating and fitting map bounds.
 */
import type { Coordinates } from '../types/index.js';
export type UseMapBoundsOptions = {
    /**
     * Padding around bounds in pixels
     * @default 40
     */
    padding?: number;
};
/**
 * Hook to manage map bounds
 *
 * Provides utilities for calculating and fitting bounds to show multiple locations.
 *
 * @param options Configuration options
 * @returns Object with bounds utilities
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { fitBounds, fitToMarkers } = useMapBounds();
 *
 *   const markers = [
 *     { lat: 37.7749, lng: -122.4194 },
 *     { lat: 34.0522, lng: -118.2437 },
 *   ];
 *
 *   useEffect(() => {
 *     fitToMarkers(markers);
 *   }, [markers, fitToMarkers]);
 * }
 * ```
 */
export declare function useMapBounds(options?: UseMapBoundsOptions): {
    fitToMarkers: (coordinates: Coordinates[], customPadding?: number) => void;
    fitToHighlighted: (coordinates: Coordinates[]) => void;
    calculateBounds: (coordinates: Coordinates[]) => google.maps.LatLngBounds | null;
};
