import type { DefaultModel, IsBranded } from "@/utils/types";
import type { PrimaryKeyBrand } from "@/utils/brands";
import type { PrimaryKey } from "@/operators";

/**
 * Applicator to Apply Primary key value filter operator: {@link PrimaryKey}
 */
export type PrimaryKeyType<T extends DefaultModel> = {
	[key in keyof T]-?: IsBranded<T[key], typeof PrimaryKeyBrand> extends true
		? NonNullable<T[key]> extends PrimaryKey<infer ResultType>
			? NonNullable<ResultType>
			: NonNullable<T[key]>
		: never;
}[keyof T] extends infer Keys
	? Keys
	: never;
