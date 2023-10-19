import type { DefaultModel, IsBranded, Merge } from "@/utils/types";
import type { OmitBrand } from "@/utils/brands";

/**
 * Applicator to Apply `Omitted` filter operator: {@link Omit}
 */
export type Omitted<T extends DefaultModel> = Merge<
	{
		[key in {
			[key in keyof T]: IsBranded<
				NonNullable<T[key]>,
				typeof OmitBrand
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
				typeof OmitBrand
			> extends true
				? never
				: keyof T[key] extends undefined
				? key
				: never;
		}[keyof T]]?: T[key];
	}
>;
