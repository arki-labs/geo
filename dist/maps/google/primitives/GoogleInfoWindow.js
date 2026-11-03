import { jsx as _jsx } from "react/jsx-runtime";
import { InfoWindow } from '@vis.gl/react-google-maps';
/**
 * GoogleInfoWindow component
 *
 * Displays an info window at the specified position.
 *
 * @example
 * ```tsx
 * const [selectedMarker, setSelectedMarker] = useState(null);
 *
 * <GoogleMarker
 *   position={coords}
 *   onClick={() => setSelectedMarker(coords)}
 * >
 *   <GooglePin />
 * </GoogleMarker>
 *
 * {selectedMarker && (
 *   <GoogleInfoWindow
 *     position={selectedMarker}
 *     onClose={() => setSelectedMarker(null)}
 *   >
 *     <div>
 *       <h3>Location Details</h3>
 *       <p>Lat: {selectedMarker.lat}</p>
 *       <p>Lng: {selectedMarker.lng}</p>
 *     </div>
 *   </GoogleInfoWindow>
 * )}
 * ```
 */
export function GoogleInfoWindow({ position, onClose, children, pixelOffset, maxWidth = 300, className, headerContent, shouldFocus = true, }) {
    return (_jsx(InfoWindow, { position: position, onClose: onClose, pixelOffset: pixelOffset, maxWidth: maxWidth, headerContent: headerContent, shouldFocus: shouldFocus, className: className, children: children }));
}
//# sourceMappingURL=GoogleInfoWindow.js.map