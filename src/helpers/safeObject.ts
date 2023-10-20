import {
	DefaultModel,
	IsBranded,
	TsBrandError,
	UnionLast,
	Equal,
	Satisfy,
	DefaultSignature,
	And,
} from "@/utils/types";
import {
	CreationRequiredBrand,
	CreationOptionalBrand,
	PrimaryKeyBrand,
} from "@/utils/brands";

/**
 * Make sure that your object is safely declared and correct with `ts-branding` rules:
 * 1) Only `one` primary key is allowed.
 * 2) Primary key cannot be `null` or `undefined`.
 * 3) Do not apply `Required` and `Optional` marks to the same property
 * ---------------------------
 * #### Warning! If only one rule is not respected the result of the type an empty object with {@link ErrorBrand} as {@link TsBrandError} result with the reason of the error
 * @returns safe object type or {@link TsBrandError}
 */
export declare type SafeObject<T extends DefaultModel> = SafeObjectRule1<T>;

/**
 * - Only one primary key is allowed.
 */
declare type SafeObjectRule1<
	T extends DefaultModel,
	ErrorMessage extends
		string = "SafeObjectError: Only one primary key is allowed.",
> = {
	[key in keyof T]-?: IsBranded<
		NonNullable<T[key]>,
		typeof PrimaryKeyBrand,
		DefaultSignature
	> extends true
		? key
		: never;
}[keyof T] extends infer PrimaryKeys
	? [PrimaryKeys] extends [never]
		? SafeObjectRule3<T>
		: Equal<UnionLast<PrimaryKeys>, PrimaryKeys> extends true
		? SafeObjectRule2<T, Satisfy<PrimaryKeys, keyof T>>
		: TsBrandError<ErrorMessage>
	: never;

/**
 * - Primary key cannot be `null` or `undefined`.
 */
declare type SafeObjectRule2<
	T extends DefaultModel,
	PrimaryKeys extends keyof T,
	ErrorMessage extends
		string = "SafeObjectError: Primary key cannot be null or undefined.",
> = keyof T[PrimaryKeys] extends undefined | null
	? TsBrandError<ErrorMessage>
	: SafeObjectRule3<T>;

/**
 * - Don't apply `Required` and `Optional` brand for the same property
 */
declare type SafeObjectRule3<
	T extends DefaultModel,
	ErrorMessage extends
		string = "SafeObjectError: Do not apply Required and Optional marks to the same property.",
> = [
	{
		[key in keyof T]-?: And<
			T[key] extends {
				[CreationRequiredBrand]?: DefaultSignature;
			}
				? true
				: false,
			T[key] extends {
				[CreationOptionalBrand]?: DefaultSignature;
			}
				? true
				: false
		> extends true
			? key
			: never;
	}[keyof T],
] extends [never]
	? T
	: TsBrandError<ErrorMessage>;
