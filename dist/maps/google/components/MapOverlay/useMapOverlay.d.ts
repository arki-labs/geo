/**
 * useMapOverlay hook
 *
 * Manages state for collapsible, resizable, and fullscreen map overlays.
 */
import type React from 'react';
export type MapSize = {
    width: number;
    height: number;
};
export type UseMapOverlayReturn = {
    /**
     * Whether the map is currently expanded (on hover or pinned)
     */
    isMapExpanded: boolean;
    /**
     * Whether the map is pinned (stays expanded)
     */
    isMapPinned: boolean;
    /**
     * Whether the map is in fullscreen mode
     */
    isMapFullScreen: boolean;
    /**
     * Current map size
     */
    mapSize: MapSize;
    /**
     * Whether the map is currently being resized
     */
    isResizing: boolean;
    /**
     * Set fullscreen state
     */
    setIsMapFullScreen: (isFullScreen: boolean) => void;
    /**
     * Called when mouse enters the map area
     */
    handleMapMouseEnter: () => void;
    /**
     * Called when mouse leaves the map area
     */
    handleMapMouseLeave: () => void;
    /**
     * Toggle map pin state
     */
    handleToggleMapPin: () => void;
    /**
     * Toggle fullscreen mode
     */
    handleToggleFullScreen: () => void;
    /**
     * Start resizing the map
     */
    handleResizeStart: (e: React.MouseEvent, handle: string) => void;
};
export type UseMapOverlayOptions = {
    /**
     * Initial map width in pixels
     * @default 700
     */
    initialWidth?: number;
    /**
     * Initial map height in pixels
     * @default 500
     */
    initialHeight?: number;
    /**
     * Minimum map width in pixels
     * @default 400
     */
    minWidth?: number;
    /**
     * Minimum map height in pixels
     * @default 300
     */
    minHeight?: number;
    /**
     * Delay before collapsing the map after mouse leave (ms)
     * @default 150
     */
    collapseDelay?: number;
};
/**
 * Hook to manage map overlay state
 *
 * Provides state and handlers for:
 * - Expand/collapse on hover
 * - Pin to keep expanded
 * - Fullscreen mode
 * - Resizing with 8-point handles
 *
 * @param options Configuration options
 * @returns State and handlers for map overlay
 *
 * @example
 * ```tsx
 * function MyMapOverlay() {
 *   const {
 *     isMapExpanded,
 *     isMapPinned,
 *     isMapFullScreen,
 *     mapSize,
 *     isResizing,
 *     handleMapMouseEnter,
 *     handleMapMouseLeave,
 *     handleToggleMapPin,
 *     handleToggleFullScreen,
 *     handleResizeStart,
 *   } = useMapOverlay();
 *
 *   return (
 *     <div
 *       onMouseEnter={handleMapMouseEnter}
 *       onMouseLeave={handleMapMouseLeave}
 *       style={isMapFullScreen ? {} : { width: mapSize.width, height: mapSize.height }}
 *     >
 *       {// Map content}
 *     </div>
 *   );
 * }
 * ```
 */
export declare function useMapOverlay(options?: UseMapOverlayOptions): UseMapOverlayReturn;
