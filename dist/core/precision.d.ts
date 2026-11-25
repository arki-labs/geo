/**
 * The formatters' precondition on `precision`: a finite number from 0 to 100, the range `toFixed`
 * takes. Anything else is a caller bug and throws the invariant failure `ARKI_FAILURE_E008` (outside
 * the range `toFixed` threw a raw `RangeError`; `NaN` silently meant 0 places). Internal: not exported
 * from the package.
 */
export declare function assertPrecision(operation: string, precision: number): void;
