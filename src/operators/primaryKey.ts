import type { PrimaryKeyBrand } from "@/utils/brands";
import { DefaultSignature } from "@/utils/types";

/**
 * Operator to apply `Primary Signature Brand` for the `id` primary key field with {@link PrimaryKeyType} helper
 */
export type PrimaryKey<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[PrimaryKeyBrand]?: Signature;
};
