import type { PrimaryKeyBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply {@link PrimaryKeyBrand} in order to get the `id` primary key field with applicator: {@link PrimaryKeyType}
 * Warning! PrimaryKey key should not be `null` or `undefined`!
 * ---------------------------
 * @example
 * ```ts
 * import type { Op } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		id: Op.PrimaryKey<number>; // Brand your type!
 * };
 * ```
 */
export declare type PrimaryKey<T extends {}> = T & {
	[PrimaryKeyBrand]?: DefaultSignature;
};
