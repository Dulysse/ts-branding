import type { PickBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply `Pick Brand` to pick value with {@link Picked}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type Pick<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[PickBrand]?: Signature;
};
