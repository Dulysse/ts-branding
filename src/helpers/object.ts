import { PrimaryKey, Required, Omit, Optional } from "@/operators";

export type Object = {
	[key in string]: PrimaryKey<{}> | Required<{}> | Omit<{}> | Optional<{}>;
};
