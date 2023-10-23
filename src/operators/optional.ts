import type { OptionalBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * #### Operator to apply `Optional Brand` for create and update form value as optional with {@link CreationForm} and {@link ModificationForm} helpers
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type Optional<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[OptionalBrand]?: Signature;
};
