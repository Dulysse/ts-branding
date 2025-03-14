import type {
	DefaultModel,
	DefaultSignature,
	IsBranded,
	Merge,
} from "@/utils/types";
import type { PickBrand } from "@/utils/brands";
import type { Cleaned } from "./cleaned";

/**
 * - Applicator to Apply `Picked` filter operator: {@link Pick}

 * @param Signature An optional key signature to applying brands into `sub-types`, by default the signature target every type signatures

 * @example
 * ```ts
 * import type { Brand, Infer } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		name: Brand.Pick<string>; // Brand your type!
 * };
 *
 * type PickedUser = Infer.Picked<User>; // { name: string; }
 * ```
 */
export declare type Picked<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Cleaned<
	Merge<
		{
			[key in {
				[key in keyof T]: IsBranded<
					NonNullable<T[key]>,
					typeof PickBrand,
					Signature
				> extends true
					? keyof T[key] extends undefined
						? never
						: key
					: never;
			}[keyof T]]-?: T[key];
		},
		{
			[key in {
				[key in keyof T]: IsBranded<
					NonNullable<T[key]>,
					typeof PickBrand,
					Signature
				> extends true
					? keyof T[key] extends undefined
						? key
						: never
					: never;
			}[keyof T]]?: T[key];
		}
	>
>;
