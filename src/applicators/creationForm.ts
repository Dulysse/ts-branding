import type {
	DefaultModel,
	DefaultSignature,
	IsBranded,
	Merge,
} from "@/utils/types";
import type { RequiredBrand, OptionalBrand } from "@/utils/brands";
import type { Required, Optional } from "@/operators";
import type { Cleaned } from "./cleaned";

declare type RequiredForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in {
		[key in keyof T]-?: IsBranded<
			NonNullable<T[key]>,
			typeof RequiredBrand,
			Signature
		> extends true
			? key
			: never;
	}[keyof T]]-?: T[key] extends Required<infer ResultType, Signature>
		? ResultType
		: T[key];
};

declare type OptionalForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in {
		[key in keyof T]: IsBranded<
			NonNullable<T[key]>,
			typeof OptionalBrand,
			Signature
		> extends true
			? key
			: never;
	}[keyof T]]?: T[key] extends Optional<infer ResultType, Signature> | undefined
		? ResultType | undefined
		: never;
};

/**
 * #### Applicator to Apply Creation form operators: {@link Required} and {@link Optional}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 * ---------------------------
 * @example
 * ```ts
 * import type { Op, Apk } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		name: Op.Required<string>; // Brand your type!
 * 		description: Op.Optional<string>; // Brand your type!
 * };
 *
 * type CreationUser = Apk.CreationForm<User>; // { name: string; description?: string | undefined }
 * ```
 */
export declare type CreationForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Cleaned<Merge<RequiredForm<T, Signature>, OptionalForm<T, Signature>>>;
