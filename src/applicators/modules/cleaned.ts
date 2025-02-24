import type {
	PrimaryKeyBrand,
	RequiredBrand,
	OptionalBrand,
	OmitBrand,
	PickBrand,
} from "@/utils/brands";
import type { DefaultSignature, DefaultModel } from "@/utils/types";
import type { SafeObject } from "@/helpers";

/**
 * - Applicator to clean up interface or type branded in order to get it without `ts-branding` operator brands

 * @example
 * ```ts
 * import type { Brand, Infer } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		name: Brand.Required<string>; // Brand your type!
 * };
 *
 * type CleanedUser = Infer.Cleaned<User>; // { name: string; }
 * ```
 */
export declare type Cleaned<T extends DefaultModel> = {
	[key in keyof T]: CleanedPrimaryKeyBrands<T[key]>;
};

/**
 * - Clean Primary key brand: {@link PrimaryKeyBrand}
 */
declare type CleanedPrimaryKeyBrands<T> = T extends infer Cleaned & {
	[PrimaryKeyBrand]?: DefaultSignature;
}
	? CleanedRequiredBrands<Cleaned>
	: CleanedRequiredBrands<T>;

/**
 * - Clean Required brand: {@link RequiredBrand}
 */
declare type CleanedRequiredBrands<T> = T extends {
	[RequiredBrand]?: infer Signature;
}
	? T extends infer Cleaned & {
			[RequiredBrand]?: Signature;
		}
		? CleanedOptionalBrands<Cleaned>
		: CleanedOptionalBrands<T>
	: CleanedOptionalBrands<T>;

/**
 * - Clean Optional brand: {@link OptionalBrand}
 */
declare type CleanedOptionalBrands<T> = T extends {
	[OptionalBrand]?: infer Signature;
}
	? T extends infer Cleaned & {
			[OptionalBrand]?: Signature;
		}
		? CleanedOmitBrands<Cleaned>
		: CleanedOmitBrands<T>
	: CleanedOmitBrands<T>;

/**
 * - Clean Omit brand: {@link OmitBrand}
 */
declare type CleanedOmitBrands<T> = T extends {
	[OmitBrand]?: infer Signature;
}
	? T extends infer Cleaned & {
			[OmitBrand]?: Signature;
		}
		? CleanedPickBrands<Cleaned>
		: CleanedPickBrands<T>
	: CleanedPickBrands<T>;

/**
 * - Clean Pick brand: {@link PickBrand}
 */
declare type CleanedPickBrands<T> = T extends {
	[PickBrand]?: infer Signature;
}
	? T extends infer Cleaned & {
			[PickBrand]?: Signature;
		}
		? CleanedSafeObjects<Cleaned>
		: CleanedSafeObjects<T>
	: CleanedSafeObjects<T>;

/**
 * - Clean Sub-objects: {@link SafeObject} or {@link DefaultModel}
 */
declare type CleanedSafeObjects<T> =
	T extends SafeObject<infer SubObject>
		? Cleaned<SubObject>
		: T extends DefaultModel
			? Cleaned<T>
			: T;
