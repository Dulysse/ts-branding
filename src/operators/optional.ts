import type { CreationOptionalBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * Operator to apply `Optional Brand` for create and update form value as optional with {@link CreationForm} and {@link ModificationForm} helpers
 */
export type Optional<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[CreationOptionalBrand]?: Signature;
};
