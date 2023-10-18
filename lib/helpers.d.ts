import {
	CreationNeededBrand,
	CreationOptionalBrand,
	PrimaryKeyBrand,
	OmitBrand,
	DefaultModel,
	IsBranded,
	Merge,
	Partial,
} from "./types";
import { Needed, Optional, PrimaryKey, Omit } from "./operators";

type CreationNeededForm<T extends DefaultModel> = {
	[key in {
		[key in keyof T]-?: IsBranded<
			NonNullable<T[key]>,
			typeof CreationNeededBrand
		> extends true
			? key
			: never;
	}[keyof T]]-?: NonNullable<T[key]> extends Needed<infer ResultType>
		? NonNullable<ResultType>
		: NonNullable<T[key]>;
};

type CreationOptionalForm<T extends DefaultModel> = {
	[key in {
		[key in keyof T]: IsBranded<
			NonNullable<T[key]>,
			typeof CreationOptionalBrand
		> extends true
			? key
			: never;
	}[keyof T]]?: NonNullable<T[key]> extends Optional<infer ResultType>
		? ResultType | undefined
		: T[key] | undefined;
};

/**
 * Helper to Apply Creation form operators: {@link Needed} and {@link Optional}
 */
export type CreationForm<T extends DefaultModel> = Merge<
	CreationNeededForm<T>,
	CreationOptionalForm<T>
>;

/**
 * Helper to Apply Modification form operators: {@link Needed} and {@link Optional}
 */
export type ModificationForm<T extends DefaultModel> = Partial<CreationForm<T>>;

/**
 * Helper to clean up interface without `ts-branding` operator brands
 */
export type Cleaned<T extends DefaultModel> = {
	[key in keyof T]: NonNullable<T[key]> extends PrimaryKey<infer Tp>
		? NonNullable<Tp> extends Needed<infer Tn>
			? NonNullable<Tn> extends Optional<infer To>
				? NonNullable<To> extends Omit<infer Tom>
					? Tom
					: To
				: Tn
			: Tp
		: T[key];
};

/**
 * Helper to Apply Primary key value filter operator: {@link PrimaryKey}
 */
export type PrimaryKeyType<T extends DefaultModel> = {
	[key in keyof T]-?: IsBranded<T[key], typeof PrimaryKeyBrand> extends true
		? NonNullable<T[key]> extends PrimaryKey<infer ResultType>
			? NonNullable<ResultType>
			: NonNullable<T[key]>
		: never;
}[keyof T] extends infer Keys
	? Keys
	: never;

/**
 * Helper to Apply `Omitted` filter operator: {@link Omit}
 */
export type Omitted<T extends DefaultModel> = Merge<
	{
		[key in {
			[key in keyof T]: IsBranded<
				NonNullable<T[key]>,
				typeof OmitBrand
			> extends true
				? never
				: keyof T[key] extends undefined
				? never
				: key;
		}[keyof T]]-?: T[key];
	},
	{
		[key in {
			[key in keyof T]: IsBranded<
				NonNullable<T[key]>,
				typeof OmitBrand
			> extends true
				? never
				: keyof T[key] extends undefined
				? key
				: never;
		}[keyof T]]?: T[key];
	}
>;
