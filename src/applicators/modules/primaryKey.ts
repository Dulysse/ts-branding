import type {
	DefaultModel,
	DefaultSignature,
	Equal,
	IsBranded,
	Satisfy,
	UnionLast,
} from "@/utils/types";
import type { PrimaryKeyBrand } from "@/utils/brands";
import type { Pk } from "@/brands";

/**
 * - Applicator to infer the `primary key` value type with operator: {@link Pk}

 * @example
 * ```ts
 * import type { Brand, Infer } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		id: Brand.Pk<number>; // Brand your type!
 * };
 *
 * type UserPrimaryKey = Infer.PrimaryKey<User>; // number
 *
 * type User2 = {
 * 		id: Brand.Omit<number>; // Brand your type!
 * };
 *
 * type User2PrimaryKey = Infer.PrimaryKey<User2>; // never
 * ```
 */
export declare type PrimaryKey<T extends DefaultModel> = {
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
			: {
						[key in Satisfy<Keys, keyof T>]: T[key];
				  }[Satisfy<Keys, keyof T>] extends infer Values
				? Values extends Pk<infer Res> | undefined
					? Res
					: never
				: never
	: never;
