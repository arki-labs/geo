/**
 * Color utilities for map markers and elements
 */
/**
 * Get a color from the marker palette by index
 */
export declare function getMarkerColor(index: number): string;
/**
 * Get all marker colors
 */
export declare function getAllMarkerColors(): readonly string[];
/**
 * Predefined color sets for different use cases
 */
export declare const COLOR_SETS: {
    /**
     * Default marker colors (8-color palette)
     */
    readonly markers: readonly ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2"];
    /**
     * Status colors
     */
    readonly status: {
        readonly success: '#10B981';
        readonly warning: '#F59E0B';
        readonly error: '#EF4444';
        readonly info: '#3B82F6';
    };
    /**
     * Polyline colors (for connections)
     */
    readonly polylines: {
        readonly guess: '#4ECDC4';
        readonly actual: '#FF6B6B';
        readonly connection: '#FFA07A';
    };
};
