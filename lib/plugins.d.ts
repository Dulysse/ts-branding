import { DefaultModel } from "./types";
import {
	CreationForm,
	ModificationForm,
	PrimaryKeyType,
	Cleaned,
} from "./helpers";

export declare abstract class Plugin<
	TModel extends DefaultModel,
	TCleanedModel extends DefaultModel = Cleaned<TModel>,
> {
	public getAll(): Promise<TCleanedModel[]>;
	public getById(
		id: PrimaryKeyType<TModel>
	): PromiseLike<TCleanedModel | undefined>;
	public create(data: CreationForm<TModel>): Promise<TCleanedModel>;
	public update(
		id: PrimaryKeyType<TModel>,
		data: ModificationForm<TModel>
	): Promise<TCleanedModel>;
	public delete(id: PrimaryKeyType<TModel>): Promise<void>;
}
