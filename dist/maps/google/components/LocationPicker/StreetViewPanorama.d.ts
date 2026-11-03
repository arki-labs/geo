/**
 * StreetViewPanorama component
 *
 * Displays Google Street View at a given location.
 * Must be used inside GoogleMapsProvider.
 */
import type { Coordinates } from '../../types/index.js';
export type StreetViewPanoramaProps = {
    /**
     * Location to display Street View
     */
    location: Coordinates;
    /**
     * Point of view configuration
     */
    pov?: {
        heading: number;
        pitch: number;
    };
    /**
     * Initial zoom level
     * @default 1
     */
    zoom?: number;
    /**
     * Custom container ID (auto-generated if not provided)
     */
    containerId?: string;
    /**
     * Container className
     */
    className?: string;
};
/**
 * StreetViewPanorama component
 *
 * Renders a Google Street View panorama at the specified location.
 *
 * @example
 * ```tsx
 * <StreetViewPanorama
 *   location={{ lat: 37.7749, lng: -122.4194 }}
 *   pov={{ heading: 34, pitch: 10 }}
 *   zoom={1}
 * />
 * ```
 */
export declare function StreetViewPanorama({ location, pov, zoom, containerId: customContainerId, className, }: StreetViewPanoramaProps): import("react").JSX.Element;
