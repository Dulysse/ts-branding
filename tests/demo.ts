import { Apk, Op, Helper } from "../dist/index.mjs";

export declare type IDemo = Helper.SafeObject<{
	id: Op.PrimaryKey<1 | 2 | 3>;
	name: string;
	media: Helper.SafeObject<{
		name: Op.Required<string>;
		type: Op.Optional<"png" | "jpg">;
	}>;
}>;

export declare type Demo = Apk.PrimaryKeyType<IDemo>;
