import type {
	DefaultModel,
	DefaultSignature,
	IsBranded,
	Merge,
} from "@/utils/types";
import type { OmitBrand } from "@/utils/brands";

/**
 * - Applicator to Apply `Omitted` filter operator: {@link Omit}

 * @param Signature An optional key signature to applying brands into `sub-types`, by default the signature target every type signatures

 * @example
 * ```ts
 * import type { Brand, Infer } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		name: Brand.Omit<string>; // Brand your type!
 * };
 *
 * type OmittedUser = Infer.Omitted<User>; // {}
 * ```
 */
export declare type Omitted<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Merge<
	{
		[key in {
			[key in keyof T]: IsBranded<
				NonNullable<T[key]>,
				typeof OmitBrand,
				Signature
			> extends true
				? never
				: keyof T[key] extends undefined
					? never
					: key;
		}[keyof T]]-?: T[key];
	},
	{
		[key in {
			[key in keyof T]: IsBranded<
				NonNullable<T[key]>,
				typeof OmitBrand,
				Signature
			> extends true
				? never
				: keyof T[key] extends undefined
					? key
					: never;
		}[keyof T]]?: T[key];
	}
>;
