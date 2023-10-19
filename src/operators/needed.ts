import type { CreationRequiredBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * Operator to apply `Required Brand` for create and update form value as required with {@link CreationForm} and {@link ModificationForm} helpers
 */
export type Required<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[CreationRequiredBrand]?: Signature;
};
