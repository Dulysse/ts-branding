import type { DefaultModel } from "@/utils/types";
import type {
	CreationForm,
	ModificationForm,
	PrimaryKeyType,
	Cleaned,
} from "@/applicators";

/**
 * @class Plugin
 * @author Ulysse Dupont
 */
export declare abstract class Plugin<
	TModel extends DefaultModel,
	TCleanedModel extends DefaultModel = Cleaned<TModel>,
> {
	/**
	 * Helper to use get all method
	 */
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
