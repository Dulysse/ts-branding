import type { Apk, Op, Helper } from "../dist/index.mjs";

export declare type IDemo = Helper.SafeObject<{
	id: Op.Required<number, "demo">;
	name: string;
	media: {
		name: Op.Required<string>;
		type: Op.Optional<"png" | "jpg">;
	};
}>;

export declare type Demo = Apk.Cleaned<IDemo["media"]>;
