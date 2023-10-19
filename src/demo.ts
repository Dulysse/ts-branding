import { Apk, Op } from "../dist/index.mjs";

export interface IDemo {
	id: Op.PrimaryKey<number>;
	name: Op.Required<string>;
	description?: Op.Optional<string>;
}

export type Demo = Apk.CreationForm<IDemo>;
//           ^?
