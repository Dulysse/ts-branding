import type { Required, Optional, PrimaryKey, Omit, Pick } from "@/operators";
import type { DefaultSignature, DefaultModel } from "@/utils/types";

/**
 * Applicator to clean up interface without `ts-branding` operator brands
 * ---------------------------
 * @param Signature An optional key signature to applying operators into `sub-types`, by default the signature target every type signatures
 */
export declare type Cleaned<
	T extends DefaultModel,
	Signature extends string = DefaultSignature,
> = {
	[key in keyof T]: T[key] extends PrimaryKey<infer Tp> | undefined
		? Tp extends Required<infer Tn, Signature> | undefined
			? Tn extends Optional<infer To, Signature> | undefined
				? To extends Omit<infer Tom, Signature> | undefined
					? Tom extends Pick<infer Tpi, Signature> | undefined
						? Tpi extends DefaultModel
							? Cleaned<Tpi>
							: Tpi
						: Tom
					: To
				: Tn
			: Tp
		: T[key];
};
