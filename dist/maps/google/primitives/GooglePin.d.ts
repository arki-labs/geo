/**
 * GooglePin - Wrapper for Pin component
 *
 * This component wraps @vis.gl/react-google-maps' Pin component with:
 * - Simplified color customization
 * - Better scaling options
 */
export type GooglePinProps = {
    /**
     * Pin background color
     */
    background?: string;
    /**
     * Pin border color
     */
    borderColor?: string;
    /**
     * Pin glyph color (icon/text inside)
     */
    glyphColor?: string;
    /**
     * Pin scale (size multiplier)
     * @default 1
     */
    scale?: number;
};
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
export declare function GooglePin({ background, borderColor, glyphColor, scale, }: GooglePinProps): import("react").JSX.Element;
