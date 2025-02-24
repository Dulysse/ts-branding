import type { ErrorBrand } from "./brands";
/**
 * The default object model allowed
 */
export declare type DefaultModel = object;
/**
 * The default type `signature` to group type by `sub-types`
 */
export declare type DefaultSignature = string & {};
/**
 * An utility type to check `brand` into a type, return `true` if the brand is in the properties of the type

 * @param Signature An optional key signature to applying brands into `sub-types`, by default the signature target every type signatures
 */
export declare type IsBranded<
	T,
	Brand extends symbol,
	Signature extends string = DefaultSignature,
> = Brand extends keyof T
	? Equal<NonNullable<T[Brand]>, Signature> extends true
		? true
		: false
	: false;
/**
 * An utility type to flat merging two objects into a single one
 */
export declare type Merge<O extends object, O2 extends object> = {
	[key in keyof (O & O2)]: key extends keyof O
		? O[key]
		: key extends keyof O2
			? O2[key]
			: never;
};
/**
 * Copy of Node native {@link globalThis.Partial} type to improve preview type performance
 */
export declare type Partial<O extends object> = {
	[key in keyof O]?: O[key] | undefined;
};
/**
 * An utility type to check if `type 1` is exactly 
equal with `type 2` 
*/
export declare type Equal<T1, T2> = T1 extends T2
	? T2 extends T1
		? true
		: false
	: false;
/**
 * An utility type to check if `type 1` is satisfying `type 2`, else return `type 2`
 */
export declare type Satisfy<T1, T2> = T1 extends T2 ? T1 : T2;
/**
 * For {@link Plugin}, allow return type to be asynchronous or not
 */
export declare type MaybePromise<T> = T | Promise<T>;
/**
 * An utility type to return a `type error` with an explicit message to get the cause of the library crash
 */
export declare type TsBrandError<Message extends string> = {
	[ErrorBrand]?: Message;
};
declare type IntersectOf<U> = (
	U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never;
/**
 * An utility type to return the `last` element of an union type
 */
export declare type UnionLast<U> =
	IntersectOf<U extends unknown ? (x: U) => void : never> extends (
		x: infer P,
	) => void
		? P
		: never;
/**
 * An utility type to return `true` only if `type 1` and `type 2` are `true`
 */
export declare type And<T1 extends boolean, T2 extends boolean> = {
	true: {
		true: true;
		false: false;
	};
	false: {
		true: false;
		false: false;
	};
}[`${T1}`][`${T2}`];
/**
 * An utility type to return `true` only if `type 1` or `type 2` are `true`
 */
export declare type Or<T1 extends boolean, T2 extends boolean> = {
	true: {
		true: true;
		false: true;
	};
	false: {
		true: true;
		false: false;
	};
}[`${T1}`][`${T2}`];
