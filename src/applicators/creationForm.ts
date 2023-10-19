import type { DefaultModel, IsBranded, Merge } from "@/utils/types";
import type {
	CreationRequiredBrand,
	CreationOptionalBrand,
} from "@/utils/brands";
import type { Required, Optional } from "@/operators";

type CreationRequiredForm<T extends DefaultModel> = {
	[key in {
		[key in keyof T]-?: IsBranded<
			NonNullable<T[key]>,
			typeof CreationRequiredBrand
		> extends true
			? key
			: never;
	}[keyof T]]-?: NonNullable<T[key]> extends Required<infer ResultType>
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
 * Applicator to Apply Creation form operators: {@link Required} and {@link Optional}
 */
export type CreationForm<T extends DefaultModel> = Merge<
	CreationRequiredForm<T>,
	CreationOptionalForm<T>
>;
