import type { Infer, Op, Helper } from "../dist";

export declare type IDemo = Helper.SafeObject<{
	id: Op.Pk<number>;
	name: string;
	media: {
		name: Op.Required<string>;
		type: Op.Optional<"png" | "jpg">;
	};
}>;

export declare type Demo = Infer.PrimaryKey<IDemo>;
