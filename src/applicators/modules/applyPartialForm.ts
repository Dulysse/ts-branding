import type { DefaultModel, DefaultSignature, Partial } from "@/utils/types";
import type { ApplyForm } from "./applyForm";

/**
 * - Applicator to apply for brands: ({@link Required} and {@link Optional}) as {@link Optional}

 * @param Signature An optional key signature to applying brands into `sub-types`, by default the signature target every type signatures

 * @example
 * ```ts
 * import type { Brand, Infer } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		name: Brand.Required<string>; // Brand your type!
 * 		description: Brand.Optional<string>; // Brand your type!
 * };
 *
 * type ApplyPartialUser = Infer.ApplyPartialForm<User>; // { name?: string | undefined; description?: string | undefined }
 * ```
 */
export declare type ApplyPartialForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Partial<ApplyForm<T, Signature>>;
