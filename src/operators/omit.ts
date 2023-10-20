import type { OmitBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply `Omit Brand` to omit value with {@link Omitted}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type Omit<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[OmitBrand]?: Signature;
};
