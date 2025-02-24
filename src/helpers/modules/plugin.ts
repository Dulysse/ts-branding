import type { DefaultModel, MaybePromise } from "@/utils/types";
import type {
	ApplyForm,
	ApplyPartialForm,
	PrimaryKey,
	Cleaned,
} from "@/applicators";

/**
 * ### Plugin to apply `REST` safe validation to web client

 * @example
 * ```ts
 * import type { Op, Infer, Helper } from "@dulysse1/ts-branding";
 *
 *	export interface User {
 *		id: Op.Pk<number>;
 *		name: Op.Required<string>;
 *		description: Op.Optional<string>;
 *		created: Date;
 *	}
 *
 *	export class UserService implements Helper.Plugin<User> {
 *		public getById(id: string) {...} // ERROR ! ID should be a number!
 *		public create(data: Infer.ApplyForm<User>) {...} // OK!
 *	}
 * ```
 */
export declare abstract class Plugin<
	TModel extends DefaultModel,
	TCleanedModel extends DefaultModel = Cleaned<TModel>,
> {
	public getAll?(): MaybePromise<TCleanedModel[]>;
	public getById?(
		id: PrimaryKey<TModel>,
	): MaybePromise<TCleanedModel | undefined>;
	public create?(data: ApplyForm<TModel>): MaybePromise<TCleanedModel>;
	public update?(
		id: PrimaryKey<TModel>,
		data: ApplyPartialForm<TModel>,
	): MaybePromise<TCleanedModel>;
	public delete?(id: PrimaryKey<TModel>): MaybePromise<void>;
}
