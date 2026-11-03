import { InvalidCoordinates } from './failures.js';
import type { Coordinates } from './types.js';
/**
 * Convert Degrees, Minutes, Seconds to Decimal Degrees
 * @param degrees - Degrees value
 * @param minutes - Minutes value (0-59)
 * @param seconds - Seconds value (0-59)
 * @param direction - Direction ('N', 'S', 'E', 'W')
 * @returns Decimal degrees
 */
export declare function dmsToDecimal(degrees: number, minutes: number, seconds: number, direction: 'N' | 'S' | 'E' | 'W'): number;
/**
 * Convert Decimal Degrees to Degrees, Minutes, Seconds
 * @param decimal - Decimal degrees value
 * @returns Object with degrees, minutes, seconds, and direction
 */
export declare function decimalToDMS(decimal: number): {
    degrees: number;
    minutes: number;
    seconds: number;
    direction: 'N' | 'S' | 'E' | 'W';
};
/**
 * Convert coordinates from one format to Google Maps format
 * Handles various input formats:
 * - {latitude, longitude}
 * - {lat, lng}
 * - {lat, lon}
 * @param coords - Coordinates in any common format
 * @returns Standardized coordinates {lat, lng}, or `InvalidCoordinates` when a value is missing
 */
export declare function toStandardCoordinates(coords: {
    lat?: number;
    lng?: number;
    lon?: number;
    latitude?: number;
    longitude?: number;
}): Coordinates | InvalidCoordinates;
/**
 * Convert standard coordinates to alternative formats
 * @param coords - Standard coordinates
 * @param format - Target format
 * @returns Coordinates in requested format
 */
export declare function fromStandardCoordinates(coords: Coordinates, format: 'latLng' | 'latitudeLongitude' | 'latLon'): {
    lat: number;
    lng: number;
} | {
    latitude: number;
    longitude: number;
} | {
    lat: number;
    lon: number;
};
/**
 * Convert coordinates to URL-safe string
 * @param coords - Coordinates to encode
 * @returns URL-safe string like "40.7128,-74.006"
 */
export declare function coordinatesToUrl(coords: Coordinates): string;
/**
 * Parse coordinates from URL parameter
 * @param urlParam - URL parameter string like "40.7128,-74.006"
 * @returns Parsed coordinates, or `InvalidCoordinates` when the text is not "lat,lng" in range
 */
export declare function coordinatesFromUrl(urlParam: string): Coordinates | InvalidCoordinates;
