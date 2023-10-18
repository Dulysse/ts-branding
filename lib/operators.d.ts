/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	CreationNeededBrand,
	CreationOptionalBrand,
	OmitBrand,
	PrimaryKeyBrand,
} from "./types";
import {
	CreationForm,
	ModificationForm,
	PrimaryKeyType,
	Omitted,
} from "./helpers";

/**
 * Operator to apply `Primary Key Brand` for the `id` primary key field with {@link PrimaryKeyType} helper
 */
export type PrimaryKey<T extends {}> = T & {
	[PrimaryKeyBrand]?: true;
};

/**
 * Operator to apply `Needed Brand` for create and update form value as required with {@link CreationForm} and {@link ModificationForm} helpers
 */
export type Needed<T extends {}> = T & {
	[CreationNeededBrand]?: true;
};

/**
 * Operator to apply `Optional Brand` for create and update form value as optional with {@link CreationForm} and {@link ModificationForm} helpers
 */
export type Optional<T extends {}> = T & {
	[CreationOptionalBrand]?: true;
};

/**
 * Operator to apply `Omit Brand` to omit value with {@link Omitted}
 */
export type Omit<T extends {}> = T & {
	[OmitBrand]?: true;
};
