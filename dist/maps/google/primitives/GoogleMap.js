import { jsx as _jsx } from "react/jsx-runtime";
import { Map } from '@vis.gl/react-google-maps';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ID, DEFAULT_MAP_ZOOM } from '../constants.js';
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
export function GoogleMap({ center = DEFAULT_MAP_CENTER, zoom = DEFAULT_MAP_ZOOM, mapId = DEFAULT_MAP_ID, mapTypeId = 'roadmap', gestureHandling = 'greedy', disableDefaultUI = true, clickableIcons = false, onClick, onCameraChanged, children, className, style = { width: '100%', height: '100%' }, }) {
    const handleClick = (event) => {
        if (onClick && event.detail.latLng) {
            const coords = {
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng,
            };
            onClick(coords, event);
        }
    };
    return (_jsx(Map, { mapId: mapId, defaultCenter: center, defaultZoom: zoom, mapTypeId: mapTypeId, gestureHandling: gestureHandling, disableDefaultUI: disableDefaultUI, clickableIcons: clickableIcons, onClick: handleClick, onCameraChanged: onCameraChanged, className: className, style: style, children: children }));
}
//# sourceMappingURL=GoogleMap.js.map