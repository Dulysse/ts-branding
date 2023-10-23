import type { DefaultModel, DefaultSignature, Partial } from "@/utils/types";
import type { CreationForm } from "./creationForm";

/**
 * #### Applicator to Apply Modification for operators: {@link Required} and {@link Optional}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 * ---------------------------
 * @example
 * ```ts
 * import type { Op, Apk } from "@dulysse1/ts-branding";
 *
 * type User = {
 * 		name: Op.Required<string>; // Brand your type!
 * 		description: Op.Optional<string>; // Brand your type!
 * };
 *
 * type ModificationUser = Apk.ModificationForm<User>; // { name?: string | undefined; description?: string | undefined }
 * ```
 */
export declare type ModificationForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Partial<CreationForm<T, Signature>>;
