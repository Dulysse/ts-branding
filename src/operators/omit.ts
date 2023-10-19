import type { OmitBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * Operator to apply `Omit Brand` to omit value with {@link Omitted}
 */
export type Omit<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[OmitBrand]?: Signature;
};
