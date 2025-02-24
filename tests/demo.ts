import type { Infer, Brand, Helper } from "../dist";

export declare type IDemo = Helper.SafeObject<{
	id: Brand.Pk<number>;
	name: string;
	media: {
		name: Brand.Required<string>;
		type: Brand.Optional<"png" | "jpg">;
	};
}>;

export declare type Demo = Infer.PrimaryKey<IDemo>;
