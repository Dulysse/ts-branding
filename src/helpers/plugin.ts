import type { DefaultModel } from "@/utils/types";
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
	public getAll?(): Promise<TCleanedModel[]>;
	public getById?(
		id: PrimaryKeyType<TModel>
	): PromiseLike<TCleanedModel | undefined>;
	public create?(data: CreationForm<TModel>): Promise<TCleanedModel>;
	public update?(
		id: PrimaryKeyType<TModel>,
		data: ModificationForm<TModel>
	): Promise<TCleanedModel>;
	public delete?(id: PrimaryKeyType<TModel>): Promise<void>;
}
