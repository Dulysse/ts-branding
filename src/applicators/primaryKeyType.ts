import type {
	DefaultModel,
	DefaultSignature,
	Equal,
	IsBranded,
	Satisfy,
	UnionLast,
} from "@/utils/types";
import type { PrimaryKeyBrand } from "@/utils/brands";
import type { PrimaryKey } from "@/operators";
import type { Cleaned } from "./cleaned";

/**
 * Applicator to Apply Primary key value filter operator: {@link PrimaryKey}
 */
export declare type PrimaryKeyType<T extends DefaultModel> = {
	[key in keyof T]-?: IsBranded<
		NonNullable<T[key]>,
		typeof PrimaryKeyBrand,
		DefaultSignature
	> extends true
		? key
		: never;
}[keyof T] extends infer Keys
	? [Keys] extends [never]
		? never
		: Equal<UnionLast<Keys>, Keys> extends false
		? never
		: Cleaned<{
				[key in Satisfy<Keys, keyof T>]: T[key];
		  }>[Satisfy<Keys, keyof T>] extends infer Values
		? Values extends PrimaryKey<infer Res> | undefined
			? Res
			: never
		: never
	: never;
