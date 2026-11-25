import { context, metrics, SpanStatusCode, trace } from '@opentelemetry/api';
import { isFailure, isFault } from '@arki/failure';
const INSTRUMENTATION = '@arki/geo';
/** Runs one reporting call. An SDK that throws cannot reach the caller. */
function quietly(report) {
    try {
        report();
    }
    catch {
        // Telemetry is best effort: it has no say over the lookup it observes.
    }
}
/**
 * Runs `execute` with `span` active, so provider spans nest under the lookup span. When the context
 * API throws before `execute` starts, `execute` runs without it.
 */
async function withActiveSpan(span, execute) {
    if (span === undefined)
        return execute();
    // An object, not a `let`: the flag is set inside the callback, where narrowing cannot follow it.
    const run = { started: false };
    try {
        return await context.with(trace.setSpan(context.active(), span), () => {
            run.started = true;
            return execute();
        });
    }
    catch (error) {
        if (run.started)
            throw error;
        return execute();
    }
}
/**
 * Runs one geocoding operation inside a `geo.<operation>` span and counts it in `geo.operations` by
 * `operation` and `outcome` (`success`, `failure` for a returned failure, `error` for a throw). A
 * returned failure sets `failure.code`; the span status is error only when `isFault(failure)` (a
 * provider refused or unreachable), not for "nothing found", a rate limit or a cancellation.
 */
export async function observeGeo(operation, attributes, execute) {
    let span;
    quietly(() => {
        span = trace.getTracer(INSTRUMENTATION).startSpan(`geo.${operation}`, { attributes });
    });
    const note = added => quietly(() => span?.setAttributes(added));
    let outcome = 'success';
    try {
        const result = await withActiveSpan(span, () => execute(note));
        // `T` is not known to be awaited, and `isFailure` refuses a promise type; the value here is settled.
        const settled = result;
        if (isFailure(settled)) {
            outcome = 'failure';
            quietly(() => span?.setAttribute('failure.code', settled.code));
            if (isFault(settled))
                quietly(() => span?.setStatus({ code: SpanStatusCode.ERROR, message: settled.code }));
        }
        return result;
    }
    catch (error) {
        outcome = 'error';
        quietly(() => span?.recordException(error instanceof Error ? error : new Error(String(error))));
        quietly(() => span?.setStatus({ code: SpanStatusCode.ERROR }));
        throw error;
    }
    finally {
        quietly(() => metrics.getMeter(INSTRUMENTATION).createCounter('geo.operations').add(1, { operation, outcome }));
        quietly(() => span?.end());
    }
}
//# sourceMappingURL=telemetry.js.map