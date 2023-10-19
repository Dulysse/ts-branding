export type DefaultModel = object;
export type DefaultSignature = "";
export type IsBranded<
	T,
	Brand extends symbol,
	Signature extends string = DefaultSignature,
> = Brand extends keyof T
	? Equal<NonNullable<T[Brand]>, Signature> extends true
		? true
		: false
	: false;
export type Merge<O extends object, O2 extends object> = {
	[key in keyof (O & O2)]: key extends keyof O
		? O[key]
		: key extends keyof O2
		? O2[key]
		: never;
};
export type Partial<O extends object> = {
	[key in keyof O]?: O[key] | undefined;
};
export type Equal<T1, T2> = T1 extends T2
	? T2 extends T1
		? true
		: false
	: false;
