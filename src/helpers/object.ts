import type { PrimaryKey, Required, Omit, Optional } from "@/operators";

/**
 * A decorated object instance
 */
export type Object = {
	[key in string]:
		| PrimaryKey<{}, string>
		| Required<{}, string>
		| Omit<{}, string>
		| Optional<{}, string>;
};
