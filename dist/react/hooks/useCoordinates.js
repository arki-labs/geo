'use client';
import { useCallback, useState } from 'react';
import { getLogger } from '@arki/log';
import { normalizeCoordinates, validateCoordinates } from '../../core/coordinates.js';
import { InvalidCoordinates } from '../../core/failures.js';
const log = getLogger('arki:geo');
/**
 * Hook to manage coordinate state with validation.
 * A refused change keeps the old coordinates and sets `error`.
 * @param initialCoordinates - Initial coordinates
 * @returns Coordinate state and update functions
 */
export function useCoordinates(initialCoordinates = null) {
    const [coordinates, setCoordinatesState] = useState(initialCoordinates);
    const [error, setError] = useState(null);
    const accept = useCallback((candidate) => {
        const checked = validateCoordinates(candidate);
        if (InvalidCoordinates.is(checked)) {
            log.warn('Refused coordinates: {reason}', { reason: checked.data.reason });
            setError(checked);
            return;
        }
        setError(null);
        setCoordinatesState(checked);
    }, []);
    const setCoordinates = useCallback((coords) => accept(coords), [accept]);
    const updateLatitude = useCallback((lat) => accept({ lat, lng: coordinates?.lng ?? 0 }), [accept, coordinates]);
    const updateLongitude = useCallback((lng) => accept({ lat: coordinates?.lat ?? 0, lng }), [accept, coordinates]);
    const normalize = useCallback(() => {
        if (!coordinates)
            return;
        const normalized = normalizeCoordinates(coordinates);
        if (InvalidCoordinates.is(normalized)) {
            setError(normalized);
            return;
        }
        setError(null);
        setCoordinatesState(normalized);
    }, [coordinates]);
    const clear = useCallback(() => {
        setError(null);
        setCoordinatesState(null);
    }, []);
    const isValid = coordinates ? !InvalidCoordinates.is(validateCoordinates(coordinates)) : false;
    return {
        coordinates,
        setCoordinates,
        updateLatitude,
        updateLongitude,
        isValid,
        error,
        normalize,
        clear,
    };
}
//# sourceMappingURL=useCoordinates.js.map