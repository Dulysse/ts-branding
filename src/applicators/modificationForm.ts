import type { DefaultModel } from "@/utils/types";
import type { CreationForm } from "./creationForm";

/**
 * Applicator to Apply Modification form operators: {@link Required} and {@link Optional}
 */
export type ModificationForm<T extends DefaultModel> = Partial<CreationForm<T>>;
