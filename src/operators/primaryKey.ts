import type { PrimaryKeyBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply `Primary Signature Brand` for the `id` primary key field with {@link PrimaryKeyType} helper (should not be undefined!)
 */
export declare type PrimaryKey<T extends {}> = T & {
	[PrimaryKeyBrand]?: DefaultSignature;
};
