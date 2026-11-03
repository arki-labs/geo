import { InvalidCoordinates } from './failures.js';
import type { Coordinates } from './types.js';
/**
 * Check whether coordinates are finite and within range
 * @param coords - Coordinates to validate
 * @returns true if valid
 */
export declare function isValidCoordinates(coords: Coordinates): boolean;
/**
 * Validate coordinates
 * @param coords - Coordinates to validate
 * @returns the same coordinates, or `InvalidCoordinates` when out of range or not finite
 */
export declare function validateCoordinates(coords: Coordinates): Coordinates | InvalidCoordinates;
/**
 * Normalize longitude to the -180 to 180 range by wrapping around the globe.
 * Runs in constant time for any finite input.
 * @param lng - Longitude to normalize
 * @returns Normalized longitude, or `InvalidCoordinates` when `lng` is not a finite number
 */
export declare function normalizeLongitude(lng: number): number | InvalidCoordinates;
/**
 * Normalize latitude to -90 to 90 range (clamped)
 * @param lat - Latitude to normalize
 * @returns Normalized latitude, or `InvalidCoordinates` when `lat` is not a finite number
 */
export declare function normalizeLatitude(lat: number): number | InvalidCoordinates;
/**
 * Normalize coordinates to valid ranges
 * @param coords - Coordinates to normalize
 * @returns Normalized coordinates, or `InvalidCoordinates` when a value is not finite
 */
export declare function normalizeCoordinates(coords: Coordinates): Coordinates | InvalidCoordinates;
/**
 * Format coordinates as a human-readable string
 * @param coords - Coordinates to format
 * @param precision - Number of decimal places (default: 6)
 * @returns Formatted string like "40.7128, -74.0060"
 */
export declare function formatCoordinates(coords: Coordinates, precision?: number): string;
/**
 * Format coordinates in Degrees, Minutes, Seconds (DMS) format
 * @param coords - Coordinates to format
 * @returns Formatted string like "40°42'46.3"N 74°00'21.6"W"
 */
export declare function formatCoordinatesDMS(coords: Coordinates): string;
/**
 * Parse coordinates from a string
 * Supports formats:
 * - "40.7128, -74.0060"
 * - "40.7128,-74.0060"
 * - "40.7128 -74.0060"
 * @param str - String to parse
 * @returns Parsed coordinates, or `InvalidCoordinates` when the text is not two plain decimal numbers in range
 */
export declare function parseCoordinates(str: string): Coordinates | InvalidCoordinates;
/**
 * Check if two coordinates are approximately equal
 * @param coords1 - First coordinate
 * @param coords2 - Second coordinate
 * @param epsilon - Maximum difference to consider equal (default: 0.000001, ~0.1m)
 * @returns true if coordinates are approximately equal
 */
export declare function coordinatesEqual(coords1: Coordinates, coords2: Coordinates, epsilon?: number): boolean;
/**
 * Round coordinates to specified precision
 * @param coords - Coordinates to round
 * @param precision - Number of decimal places (default: 6)
 * @returns Rounded coordinates
 */
export declare function roundCoordinates(coords: Coordinates, precision?: number): Coordinates;
