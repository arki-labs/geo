/**
 * LocationPicker component
 *
 * Interactive map for selecting geographic locations.
 */
import type { LocationPickerProps } from './types.js';
/**
 * LocationPicker component
 *
 * An interactive map that allows users to select a location by clicking.
 * Optionally shows an actual/correct location and supports Street View checking.
 *
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<Coordinates | null>(null);
 *
 * <LocationPicker
 *   onLocationSelect={setSelected}
 *   selectedLocation={selected}
 *   enableStreetView
 * />
 * ```
 */
export declare function LocationPicker({ onLocationSelect, selectedLocation, actualLocation, showActual, disabled, className, centerOnSelected, zoom: externalZoom, center: externalCenter, onZoomChange, onCenterChange, selectedMarkerColor, // Blue
actualMarkerColor, // Green
enableStreetView, }: LocationPickerProps): import("react").JSX.Element;
