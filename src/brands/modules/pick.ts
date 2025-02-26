import type { PickBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * - Operator to apply {@link PickBrand} in order to pick value with applicator: {@link Picked}

 * @param Signature An optional key signature to applying brands into `sub-types`, by default the signature target every type signatures

 * @example
 * ```ts
 * import type { Brand } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		pickMe: Brand.Pick<string>; // Brand your type!
 * };
 * ```
 */
export declare type Pick<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[PickBrand]?: Signature;
};
