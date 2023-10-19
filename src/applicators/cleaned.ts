import type { Required, Optional, PrimaryKey, Omit } from "@/operators";
import type { DefaultModel } from "@/utils/types";

/**
 * Applicator to clean up interface without `ts-branding` operator brands
 */
export type Cleaned<T extends DefaultModel> = {
	[key in keyof T]: NonNullable<T[key]> extends PrimaryKey<infer Tp>
		? NonNullable<Tp> extends Required<infer Tn>
			? NonNullable<Tn> extends Optional<infer To>
				? NonNullable<To> extends Omit<infer Tom>
					? Tom
					: To
				: Tn
			: Tp
		: T[key];
};
