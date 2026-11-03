/**
 * GoogleMapsProvider - Wrapper for APIProvider
 *
 * This component wraps @vis.gl/react-google-maps' APIProvider with:
 * - API key validation
 * - Error handling
 * - Loading state management
 */
import type { ReactNode } from 'react';
export type GoogleMapsProviderProps = {
    /**
     * Google Maps API key (required)
     */
    apiKey: string;
    /**
     * Child components (maps, markers, etc.)
     */
    children: ReactNode;
    /**
     * Google Maps API version
     * @default 'weekly'
     */
    version?: string;
    /**
     * Additional Google Maps libraries to load
     * @default ['places', 'geometry']
     */
    libraries?: string[];
    /**
     * Called when the API fails to load
     */
    onLoadError?: (error: Error) => void;
    /**
     * Language for map text
     * @default 'en'
     */
    language?: string;
    /**
     * Region bias for results
     */
    region?: string;
};
/**
 * GoogleMapsProvider component
 *
 * Wraps APIProvider from @vis.gl/react-google-maps with validation and error handling.
 *
 * @example
 * ```tsx
 * <GoogleMapsProvider apiKey="YOUR_API_KEY">
 *   <GoogleMap center={{ lat: 0, lng: 0 }} zoom={2}>
 *     <GoogleMarker position={{ lat: 0, lng: 0 }} />
 *   </GoogleMap>
 * </GoogleMapsProvider>
 * ```
 */
export declare function GoogleMapsProvider({ apiKey, children, version, libraries, onLoadError, language, region, }: GoogleMapsProviderProps): import("react").JSX.Element;
