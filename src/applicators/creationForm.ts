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
import type { Cleaned } from "./cleaned";

declare type CreationRequiredForm<
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
	}[keyof T]]-?: T[key] extends Required<infer ResultType, Signature>
		? ResultType
		: T[key];
};

declare type CreationOptionalForm<
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
	}[keyof T]]?: T[key] extends Optional<infer ResultType, Signature> | undefined
		? ResultType | undefined
		: never;
};

/**
 * Applicator to Apply Creation form operators: {@link Required} and {@link Optional}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type CreationForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Cleaned<
	Merge<CreationRequiredForm<T, Signature>, CreationOptionalForm<T, Signature>>,
	Signature
>;
