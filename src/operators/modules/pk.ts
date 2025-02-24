import type { PrimaryKeyBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * - Operator to apply {@link PrimaryKeyBrand} to a property in order to get the `id` primary key field with applicator: {@link PrimaryKey}
 * Warning! PrimaryKey key should not be `null` or `undefined`!

 * @example
 * ```ts
 * import type { Op } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		id: Op.Pk<number>; // Brand your type!
 * };
 * ```
 */
export declare type Pk<T extends {}> = T & {
	[PrimaryKeyBrand]?: DefaultSignature;
};
