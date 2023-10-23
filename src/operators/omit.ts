import type { OmitBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply {@link OmitBrand} in order to omit value with applicator: {@link Omitted}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 * ---------------------------
 * @example
 * ```ts
 * import type { Op } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		id: Op.Omit<number>; // Brand your type!
 * };
 * ```
 */
export declare type Omit<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[OmitBrand]?: Signature;
};
