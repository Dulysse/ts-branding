import type { CreationOptionalBrand } from "@/utils/brands";

/**
 * Operator to apply `Optional Brand` for create and update form value as optional with {@link CreationForm} and {@link ModificationForm} helpers
 */
export type Optional<T extends {}> = T & {
	[CreationOptionalBrand]?: true;
};
