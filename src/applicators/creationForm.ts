import type {
	DefaultModel,
	DefaultSignature,
	IsBranded,
	Merge,
} from "@/utils/types";
import type {
	CreationRequiredBrand,
	CreationOptionalBrand,
} from "@/utils/brands";
import type { Required, Optional } from "@/operators";

type CreationRequiredForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in {
		[key in keyof T]-?: IsBranded<
			NonNullable<T[key]>,
			typeof CreationRequiredBrand,
			Signature
		> extends true
			? key
			: never;
	}[keyof T]]-?: NonNullable<T[key]> extends Required<
		infer ResultType,
		Signature
	>
		? NonNullable<ResultType>
		: never;
};

type CreationOptionalForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in {
		[key in keyof T]: IsBranded<
			NonNullable<T[key]>,
			typeof CreationOptionalBrand,
			Signature
		> extends true
			? key
			: never;
	}[keyof T]]?: NonNullable<T[key]> extends Optional<
		infer ResultType,
		Signature
	>
		? ResultType | undefined
		: never;
};

/**
 * Applicator to Apply Creation form operators: {@link Required} and {@link Optional}
 */
export type CreationForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Merge<
	CreationRequiredForm<T, Signature>,
	CreationOptionalForm<T, Signature>
>;
