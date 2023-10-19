import type { DefaultModel, DefaultSignature, Partial } from "@/utils/types";
import type { CreationForm } from "./creationForm";

/**
 * Applicator to Apply Modification form operators: {@link Required} and {@link Optional}
 */
export type ModificationForm<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = Partial<CreationForm<T, Signature>>;
