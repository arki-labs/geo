/**
 * Spans and a counter for geocoding lookups and the provider calls under them. Safe without an
 * OpenTelemetry SDK: the API then does nothing. A telemetry fault (a broken SDK or exporter) never
 * changes a result or hides an error.
 *
 * Attributes are bounded and safe: an operation, a provider name, whether the cache answered, a
 * batch size and a failure code. Never the address, the coordinates, the cache key, the provider's
 * message or an API key.
 */
import type { Attributes } from '@opentelemetry/api';
/** Adds bounded attributes to the running span, such as whether the cache answered. */
export type NoteAttributes = (attributes: Attributes) => void;
/**
 * Runs one geocoding operation inside a `geo.<operation>` span and counts it in `geo.operations` by
 * `operation` and `outcome` (`success`, `failure` for a returned failure, `error` for a throw). A
 * returned failure sets `failure.code`; the span status is error only when `isFault(failure)` (a
 * provider refused or unreachable), not for "nothing found", a rate limit or a cancellation.
 */
export declare function observeGeo<T>(operation: string, attributes: Attributes, execute: (note: NoteAttributes) => Promise<T>): Promise<T>;
