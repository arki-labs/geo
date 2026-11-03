/**
 * StreetViewPanorama component
 *
 * Displays Google Street View at a given location.
 * Must be used inside GoogleMapsProvider.
 */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useId } from 'react';
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
export function StreetViewPanorama({ location, pov = { heading: 34, pitch: 10 }, zoom = 1, containerId: customContainerId, className = 'h-full w-full', }) {
    const autoId = useId();
    const containerId = customContainerId || `street-view-${autoId}`;
    useEffect(() => {
        if (typeof google !== 'undefined' && google.maps?.StreetViewPanorama) {
            const container = document.querySelector(`#${CSS.escape(containerId)}`);
            if (container) {
                new google.maps.StreetViewPanorama(container, {
                    position: location,
                    pov,
                    zoom,
                });
            }
        }
    }, [location, containerId, pov, zoom]);
    return _jsx("div", { id: containerId, className: className });
}
//# sourceMappingURL=StreetViewPanorama.js.map