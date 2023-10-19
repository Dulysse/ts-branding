import type { Required, Optional, PrimaryKey, Omit } from "@/operators";
import type { DefaultModel, DefaultSignature } from "@/utils/types";

/**
 * Applicator to clean up interface without `ts-branding` operator brands
 */
export type Cleaned<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in keyof T]: T[key] extends PrimaryKey<infer Tp, Signature> | undefined
		? Tp extends Required<infer Tn, Signature> | undefined
			? Tn extends Optional<infer To, Signature> | undefined
				? To extends Omit<infer Tom, Signature> | undefined
					? Tom
					: To
				: Tn
			: Tp
		: T[key];
};
