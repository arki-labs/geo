/**
 * Represents geographic coordinates using WGS84 datum
 * @property lat - Latitude in decimal degrees (-90 to 90)
 * @property lng - Longitude in decimal degrees (-180 to 180)
 */
export type Coordinates = {
    lat: number;
    lng: number;
};
/**
 * Represents a geographic bounding box
 */
export type Bounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};
/**
 * Distance units
 */
export type DistanceUnit = 'km' | 'mi' | 'm' | 'ft';
/**
 * Cardinal and intercardinal directions
 */
export type Direction = 'N' | 'NNE' | 'NE' | 'ENE' | 'E' | 'ESE' | 'SE' | 'SSE' | 'S' | 'SSW' | 'SW' | 'WSW' | 'W' | 'WNW' | 'NW' | 'NNW';
/**
 * Earth radius in kilometers
 */
export declare const EARTH_RADIUS_KM = 6371;
/**
 * Earth radius in miles
 */
export declare const EARTH_RADIUS_MI = 3959;
/**
 * Conversion factors
 */
export declare const CONVERSION_FACTORS: {
    readonly KM_TO_MI: 0.621371;
    readonly MI_TO_KM: 1.60934;
    readonly KM_TO_M: 1000;
    readonly M_TO_KM: 0.001;
    readonly MI_TO_FT: 5280;
    readonly FT_TO_MI: 0.000189394;
};
