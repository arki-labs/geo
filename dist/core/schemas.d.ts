/**
 * The Zod schema of a `ProviderAttempt` (`failures.ts`), offered to callers by `@arki/geo/zod`. The TS type
 * is the source; `zod.test.ts` locks the two both ways. It lives apart from `failures.ts` so the public
 * entries name no Zod type (`TYPES_E001`).
 */
import { z } from 'zod';
/** A `ProviderAttempt`: one provider's failed try. */
export declare const providerAttemptSchema: z.ZodObject<{
    provider: z.ZodString;
    kind: z.ZodEnum<{
        rate_limited: "rate_limited";
        rejected: "rejected";
        unreachable: "unreachable";
    }>;
    message: z.ZodString;
}, z.core.$strip>;
