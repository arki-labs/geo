/**
 * useMapOverlay hook
 *
 * Manages state for collapsible, resizable, and fullscreen map overlays.
 */
'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
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
export function useMapOverlay(options = {}) {
    const { initialWidth = 700, initialHeight = 500, minWidth = 400, minHeight = 300, collapseDelay = 150, } = options;
    const [isMapExpanded, setIsMapExpanded] = useState(false);
    const [isMapPinned, setIsMapPinned] = useState(false);
    const [isMapFullScreen, setIsMapFullScreen] = useState(false);
    const [mapSize, setMapSize] = useState({ width: initialWidth, height: initialHeight });
    const [isResizing, setIsResizing] = useState(false);
    const [resizeHandle, setResizeHandle] = useState(null);
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const collapseTimeoutRef = useRef(null);
    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (collapseTimeoutRef.current) {
                clearTimeout(collapseTimeoutRef.current);
            }
        };
    }, []);
    /**
     * Handle mouse enter - expand the map
     */
    const handleMapMouseEnter = useCallback(() => {
        if (collapseTimeoutRef.current) {
            clearTimeout(collapseTimeoutRef.current);
            collapseTimeoutRef.current = null;
        }
        setIsMapExpanded(true);
    }, []);
    /**
     * Handle mouse leave - schedule collapse if not pinned
     */
    const handleMapMouseLeave = useCallback(() => {
        if (isMapPinned) {
            return;
        }
        collapseTimeoutRef.current = setTimeout(() => {
            setIsMapExpanded(false);
            collapseTimeoutRef.current = null;
        }, collapseDelay);
    }, [isMapPinned, collapseDelay]);
    /**
     * Toggle map pin state
     */
    const handleToggleMapPin = useCallback(() => {
        if (isMapPinned) {
            setIsMapPinned(false);
            setIsMapExpanded(false);
        }
        else {
            setIsMapPinned(true);
        }
    }, [isMapPinned]);
    /**
     * Toggle fullscreen mode
     */
    const handleToggleFullScreen = useCallback(() => {
        setIsMapFullScreen(!isMapFullScreen);
        if (!isMapFullScreen) {
            // Auto-pin when entering fullscreen
            setIsMapPinned(true);
        }
    }, [isMapFullScreen]);
    /**
     * Start resizing the map
     */
    const handleResizeStart = useCallback((e, handle) => {
        e.preventDefault();
        e.stopPropagation();
        setIsResizing(true);
        setResizeHandle(handle);
        setResizeStart({
            x: e.clientX,
            y: e.clientY,
            width: mapSize.width,
            height: mapSize.height,
        });
    }, [mapSize]);
    // Handle resize events
    useEffect(() => {
        if (!isResizing)
            return;
        const handleResizeMove = (e) => {
            if (!resizeHandle)
                return;
            const deltaX = e.clientX - resizeStart.x;
            const deltaY = e.clientY - resizeStart.y;
            let newWidth = resizeStart.width;
            let newHeight = resizeStart.height;
            // Calculate new size based on resize handle direction
            if (resizeHandle.includes('e')) {
                newWidth = Math.max(minWidth, resizeStart.width + deltaX);
            }
            if (resizeHandle.includes('w')) {
                newWidth = Math.max(minWidth, resizeStart.width - deltaX);
            }
            if (resizeHandle.includes('s')) {
                newHeight = Math.max(minHeight, resizeStart.height + deltaY);
            }
            if (resizeHandle.includes('n')) {
                newHeight = Math.max(minHeight, resizeStart.height - deltaY);
            }
            setMapSize({ width: newWidth, height: newHeight });
        };
        const handleResizeEnd = () => {
            setIsResizing(false);
            setResizeHandle(null);
        };
        window.addEventListener('mousemove', handleResizeMove);
        window.addEventListener('mouseup', handleResizeEnd);
        return () => {
            window.removeEventListener('mousemove', handleResizeMove);
            window.removeEventListener('mouseup', handleResizeEnd);
        };
    }, [isResizing, resizeHandle, resizeStart, minWidth, minHeight]);
    return {
        isMapExpanded,
        isMapPinned,
        isMapFullScreen,
        mapSize,
        isResizing,
        setIsMapFullScreen,
        handleMapMouseEnter,
        handleMapMouseLeave,
        handleToggleMapPin,
        handleToggleFullScreen,
        handleResizeStart,
    };
}
//# sourceMappingURL=useMapOverlay.js.map