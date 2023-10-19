import type { Required, Optional, PrimaryKey, Omit } from "@/operators";
import type { DefaultModel, DefaultSignature } from "@/utils/types";

/**
 * Applicator to clean up interface without `ts-branding` operator brands
 */
export type Cleaned<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in keyof T]: NonNullable<T[key]> extends PrimaryKey<infer Tp, Signature>
		? NonNullable<Tp> extends Required<infer Tn, Signature>
			? NonNullable<Tn> extends Optional<infer To, Signature>
				? NonNullable<To> extends Omit<infer Tom, Signature>
					? Tom
					: To
				: Tn
			: Tp
		: T[key];
};
