import type { OptionalBrand } from "@/utils/brands";
import type { DefaultSignature } from "@/utils/types";

/**
 * - Operator to apply {@link OptionalBrand} in order to create and update form value as `optional` with applicator: {@link ApplyForm}, {@link ApplyPartialForm}

 * @param Signature An optional key signature to applying brands into `sub-types`, by default the signature target every type signatures

 * @example
 * ```ts
 * import type { Brand } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		description: Brand.Optional<string>; // Brand your type!
 * };
 * ```
 */
export declare type Optional<
	T extends {},
	Signature extends string = DefaultSignature,
> = T & {
	[OptionalBrand]?: Signature;
};
