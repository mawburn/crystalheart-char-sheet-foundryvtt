import SwadeActor from '../../entities/SwadeActor';
export default class CharacterSheet extends ActorSheet {
    static get defaultOptions(): {
        classes: string[];
        width: number;
        height: number;
        resizable: boolean;
        tabs: {
            navSelector: string;
            contentSelector: string;
            initial: string;
        }[];
        template: string;
        viewPermission: 0 | 2 | 1 | 3;
        baseApplication: string;
        top: number;
        left: number;
        scale?: number;
        popOut: boolean;
        minimizable: boolean;
        id: string;
        title: string;
        scrollY: string[];
        dragDrop: Omit<DragDrop.Options, "permissions" | "callbacks">[];
        filters: Omit<SearchFilter.Options, "callback">[];
        closeOnSubmit: boolean;
        submitOnChange: boolean;
        submitOnClose: boolean;
        editable: boolean;
    };
    get template(): string;
    /**
     * @override
     */
    get actor(): SwadeActor;
    activateListeners(html: JQuery): void;
    getData(): any;
    getPowerPoints(item: any): {
        current?: undefined;
        max?: undefined;
    } | {
        current: any;
        max: any;
    };
    /**
     * Extend and override the sheet header buttons
     * @override
     */
    protected _getHeaderButtons(): Application.HeaderButton[];
    protected _onConfigureEntity(event: Event): void;
    protected _calcInventoryWeight(items: any): number;
    private _toggleEquipped;
    protected _chooseItemType(choices?: any): Promise<unknown>;
    protected _createActiveEffect(name?: string): Promise<any>;
}
