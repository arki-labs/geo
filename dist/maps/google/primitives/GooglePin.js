import { jsx as _jsx } from "react/jsx-runtime";
/**
 * GooglePin - Wrapper for Pin component
 *
 * This component wraps @vis.gl/react-google-maps' Pin component with:
 * - Simplified color customization
 * - Better scaling options
 */
import { Pin } from '@vis.gl/react-google-maps';
/**
 * GooglePin component
 *
 * Default pin visualization for markers.
 *
 * @example
 * ```tsx
 * // Default pin
 * <GoogleMarker position={coords}>
 *   <GooglePin />
 * </GoogleMarker>
 *
 * // Customized pin
 * <GoogleMarker position={coords}>
 *   <GooglePin
 *     background="#FF6B6B"
 *     borderColor="#000000"
 *     glyphColor="#FFFFFF"
 *     scale={1.5}
 *   />
 * </GoogleMarker>
 * ```
 */
export function GooglePin({ background = '#EA4335', borderColor = '#C5221F', glyphColor = '#FFFFFF', scale = 1, }) {
    return _jsx(Pin, { background: background, borderColor: borderColor, glyphColor: glyphColor, scale: scale });
}
//# sourceMappingURL=GooglePin.js.map