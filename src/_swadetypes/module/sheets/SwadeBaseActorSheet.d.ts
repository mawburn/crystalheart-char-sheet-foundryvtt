import SwadeActor from '../entities/SwadeActor';
/**
 * @noInheritDoc
 */
export default class SwadeBaseActorSheet extends ActorSheet {
    /**
     * @override
     */
    get actor(): SwadeActor;
    activateListeners(html: JQuery): void;
    getData(): any;
    /**
     * Extend and override the sheet header buttons
     * @override
     */
    protected _getHeaderButtons(): Application.HeaderButton[];
    protected _onConfigureEntity(event: Event): void;
    protected _chooseItemType(choices?: any): Promise<unknown>;
    protected _checkNull(items: Item[]): Item[];
    protected _onResize(event: any): Promise<void>;
    protected _modifyDefense(target: string): void;
    protected _calcInventoryWeight(items: any): number;
    protected _filterPowers(html: JQuery, arcane: string): void;
    /** @override */
    render(force?: boolean, options?: Application.RenderOptions): this;
}
