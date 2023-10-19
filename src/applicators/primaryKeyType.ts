import type {
	DefaultModel,
	DefaultSignature,
	IsBranded,
	Satisfy,
} from "@/utils/types";
import type { PrimaryKeyBrand } from "@/utils/brands";
import type { PrimaryKey } from "@/operators";
import type { Cleaned } from "./cleaned";

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
		? key
		: never;
}[keyof T] extends infer Keys
	? Cleaned<
			{
				[key in Satisfy<Keys, keyof T>]: T[key];
			},
			Signature
	  >[Satisfy<Keys, keyof T>] extends infer Values
		? Values extends PrimaryKey<infer Res, Signature> | undefined
			? Res
			: never
		: never
	: never;
