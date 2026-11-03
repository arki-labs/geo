/**
 * StreetViewChecker component
 *
 * Checks if Street View is available at a given location.
 * Must be used inside GoogleMapsProvider.
 */
import type { Coordinates } from '../../types/index.js';
export type StreetViewCheckerProps = {
    /**
     * Location to check for Street View availability
     */
    location: Coordinates;
    /**
     * Called when availability is determined
     */
    onAvailabilityChange: (available: boolean) => void;
    /**
     * Search radius in meters
     * @default 50
     */
    radius?: number;
};
/**
 * StreetViewChecker component
 *
 * Asynchronously checks if Google Street View is available at the specified location.
 *
 * @example
 * ```tsx
 * const [streetViewAvailable, setStreetViewAvailable] = useState(false);
 *
 * <StreetViewChecker
 *   location={{ lat: 37.7749, lng: -122.4194 }}
 *   onAvailabilityChange={setStreetViewAvailable}
 * />
 * ```
 */
export declare function StreetViewChecker({ location, onAvailabilityChange, radius }: StreetViewCheckerProps): null;
