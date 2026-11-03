import { jsx as _jsx } from "react/jsx-runtime";
import { AdvancedMarker } from '@vis.gl/react-google-maps';
/**
 * GoogleMarker component
 *
 * Displays a marker on the map at the specified position.
 *
 * @example
 * ```tsx
 * // Basic marker with default pin
 * <GoogleMarker position={{ lat: 37.7749, lng: -122.4194 }}>
 *   <GooglePin />
 * </GoogleMarker>
 *
 * // Marker with custom content
 * <GoogleMarker
 *   position={{ lat: 37.7749, lng: -122.4194 }}
 *   onClick={() => console.log('Clicked!')}
 * >
 *   <div className="custom-marker">📍</div>
 * </GoogleMarker>
 * ```
 */
export function GoogleMarker({ position, onClick, children, zIndex, className, title }) {
    return (_jsx(AdvancedMarker, { position: position, onClick: onClick, zIndex: zIndex, className: className, title: title, children: children }));
}
//# sourceMappingURL=GoogleMarker.js.map