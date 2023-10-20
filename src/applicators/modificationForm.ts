import type { DefaultModel, DefaultSignature, Partial } from "@/utils/types";
import type { CreationForm } from "./creationForm";

/**
 * Applicator to Apply Modification form operators: {@link Required} and {@link Optional}
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type ModificationForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Partial<CreationForm<T, Signature>>;
