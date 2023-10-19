export type DefaultModel = object;
export type IsBranded<T, Brand extends symbol> = Brand extends keyof T
	? true
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
