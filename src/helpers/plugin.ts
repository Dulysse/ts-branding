import type { DefaultModel, MaybePromise } from "@/utils/types";
import type {
	CreationForm,
	ModificationForm,
	PrimaryKeyType,
	Cleaned,
} from "@/applicators";

/**
 * ### Plugin to apply `REST`validation to web client
 * @class Plugin
 * @example
 * ```tsx
 *export interface User {
 *		id: Op.PrimaryKey<number>;
 *		name: Op.Required<string>;
 *		description: Op.Optional<string>;
 *		created: Date;
 *	}
 * 
 *export class UserService implements Helper.Plugin<User> {
 *		public getById(id: string) {...} // ERROR ! ID should be a number!
 *		public create(data: Apk.CreationForm<User>) {...} // OK!
 *}
	```
 * @author Ulysse Dupont
 */
export declare abstract class Plugin<
	TModel extends DefaultModel,
	TCleanedModel extends DefaultModel = Cleaned<TModel>,
> {
	public getAll?(): MaybePromise<TCleanedModel[]>;
	public getById?(
		id: PrimaryKeyType<TModel>
	): MaybePromise<TCleanedModel | undefined>;
	public create?(data: CreationForm<TModel>): MaybePromise<TCleanedModel>;
	public update?(
		id: PrimaryKeyType<TModel>,
		data: ModificationForm<TModel>
	): MaybePromise<TCleanedModel>;
	public delete?(id: PrimaryKeyType<TModel>): MaybePromise<void>;
}
