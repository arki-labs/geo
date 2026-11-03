/**
 * GoogleMap - Wrapper for Map component
 *
 * This component wraps @vis.gl/react-google-maps' Map component with:
 * - Sensible defaults for common use cases
 * - Simplified coordinate handling
 * - Better click event handling
 */
import type { ReactNode } from 'react';
import type { Coordinates } from '../types/index.js';
import type { MapCameraChangedEvent, MapMouseEvent } from '../types/index.js';
export type GoogleMapProps = {
    /**
     * Map center coordinates
     * @default { lat: 20, lng: 0 }
     */
    center?: Coordinates;
    /**
     * Map zoom level (0-21)
     * @default 2
     */
    zoom?: number;
    /**
     * Map ID for styling
     * @default 'arki-map'
     */
    mapId?: string;
    /**
     * Map type
     * @default 'roadmap'
     */
    mapTypeId?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
    /**
     * Gesture handling mode
     * @default 'greedy'
     */
    gestureHandling?: 'greedy' | 'cooperative' | 'none';
    /**
     * Whether to disable default UI controls
     * @default true
     */
    disableDefaultUI?: boolean;
    /**
     * Whether to disable clickable POI icons
     * @default true
     */
    clickableIcons?: boolean;
    /**
     * Called when user clicks the map
     */
    onClick?: (coords: Coordinates, event: MapMouseEvent) => void;
    /**
     * Called when the camera (center/zoom) changes
     */
    onCameraChanged?: (event: MapCameraChangedEvent) => void;
    /**
     * Child elements (markers, info windows, etc.)
     */
    children?: ReactNode;
    /**
     * Additional className for styling
     */
    className?: string;
    /**
     * Map container style
     */
    style?: React.CSSProperties;
};
/**
 * GoogleMap component
 *
 * A simplified wrapper around Google Maps with sensible defaults.
 *
 * @example
 * ```tsx
 * <GoogleMap
 *   center={{ lat: 37.7749, lng: -122.4194 }}
 *   zoom={12}
 *   onClick={(coords) => console.log('Clicked:', coords)}
 * >
 *   <GoogleMarker position={{ lat: 37.7749, lng: -122.4194 }} />
 * </GoogleMap>
 * ```
 */
export declare function GoogleMap({ center, zoom, mapId, mapTypeId, gestureHandling, disableDefaultUI, clickableIcons, onClick, onCameraChanged, children, className, style, }: GoogleMapProps): import("react").JSX.Element;
