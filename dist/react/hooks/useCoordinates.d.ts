import { InvalidCoordinates } from '../../core/failures.js';
import type { Coordinates } from '../../core/types.js';
export type UseCoordinatesReturn = {
    coordinates: Coordinates | null;
    setCoordinates: (coords: Coordinates) => void;
    updateLatitude: (lat: number) => void;
    updateLongitude: (lng: number) => void;
    isValid: boolean;
    /** Why the last change was refused, or null when the last change was accepted. The previous value is kept. */
    error: InvalidCoordinates | null;
    normalize: () => void;
    clear: () => void;
};
/**
 * Hook to manage coordinate state with validation.
 * A refused change keeps the old coordinates and sets `error`.
 * @param initialCoordinates - Initial coordinates
 * @returns Coordinate state and update functions
 */
export declare function useCoordinates(initialCoordinates?: Coordinates | null): UseCoordinatesReturn;
