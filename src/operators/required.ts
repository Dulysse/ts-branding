import type { CreationRequiredBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply `Required Brand` for create and update form value as required with {@link CreationForm} and {@link ModificationForm} helpers
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type Required<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[CreationRequiredBrand]?: Signature;
};
