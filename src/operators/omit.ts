import type { OmitBrand } from "@/utils/brands";

/**
 * Operator to apply `Omit Brand` to omit value with {@link Omitted}
 */
export type Omit<T extends {}> = T & {
	[OmitBrand]?: true;
};
