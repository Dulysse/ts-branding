import { PrimaryKey, Required, Omit, Optional } from "@/operators";

export type Object = {
	[key in string]:
		| PrimaryKey<{}, string>
		| Required<{}, string>
		| Omit<{}, string>
		| Optional<{}, string>;
};
