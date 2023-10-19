import type { PrimaryKeyBrand } from "@/utils/brands";

/**
 * Operator to apply `Primary Key Brand` for the `id` primary key field with {@link PrimaryKeyType} helper
 */
export type PrimaryKey<T extends {}> = T & {
	[PrimaryKeyBrand]?: true;
};
