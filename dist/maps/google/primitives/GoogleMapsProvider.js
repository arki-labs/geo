import { jsx as _jsx } from "react/jsx-runtime";
import { getLogger } from '@arki/log';
import { APIProvider } from '@vis.gl/react-google-maps';
const log = getLogger('arki:geo');
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
export function GoogleMapsProvider({ apiKey, children, version = 'weekly', libraries = ['places', 'geometry'], onLoadError, language = 'en', region, }) {
    // Validate API key
    if (!apiKey) {
        const error = new Error('Google Maps API key is required');
        log.warn('Google Maps API key is missing');
        onLoadError?.(error);
        return (_jsx("div", { className: "flex items-center justify-center p-4 text-red-600", children: _jsx("p", { children: "Google Maps API key is missing. Please configure your environment variables." }) }));
    }
    return (_jsx(APIProvider, { apiKey: apiKey, version: version, libraries: libraries, language: language, region: region, onLoad: () => {
            log.debug('Google Maps API loaded');
        }, onError: error => {
            log.warn('Google Maps API failed to load: {message}', {
                message: error instanceof Error ? error.message : String(error),
            });
            onLoadError?.(error instanceof Error ? error : new Error(String(error)));
        }, children: children }));
}
//# sourceMappingURL=GoogleMapsProvider.js.map