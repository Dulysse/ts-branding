import type { CreationRequiredBrand } from "@/utils/brands";

/**
 * Operator to apply `Required Brand` for create and update form value as required with {@link CreationForm} and {@link ModificationForm} helpers
 */
export type Required<T extends {}> = T & {
	[CreationRequiredBrand]?: true;
};
