import { Op, Run } from "./lib";

type a = {
	name: Op.Omit<number>;
	name2: Op.PrimaryKey<string>;
};
type pk = Run.Cleaned<a>;
//    ^?
