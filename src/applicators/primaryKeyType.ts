import type { DefaultModel, DefaultSignature, IsBranded } from "@/utils/types";
import type { PrimaryKeyBrand } from "@/utils/brands";
import type { PrimaryKey } from "@/operators";

/**
 * Applicator to Apply Primary key value filter operator: {@link PrimaryKey}
 */
export type PrimaryKeyType<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in keyof T]-?: IsBranded<
		NonNullable<T[key]>,
		typeof PrimaryKeyBrand,
		Signature
	> extends true
		? T[key] extends PrimaryKey<infer ResultType, Signature>
			? NonNullable<ResultType>
			: never
		: never;
}[keyof T] extends infer Keys
	? Keys
	: never;
