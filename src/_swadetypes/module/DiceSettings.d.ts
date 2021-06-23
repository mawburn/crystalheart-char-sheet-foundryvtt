/**
 * This class defines a submenu for the system settings which will handle the DSN Settings
 */
export default class DiceSettings extends FormApplication {
    config: any;
    customWildDieDefaultColors: any;
    constructor(object?: {}, options?: {});
    static get defaultOptions(): {
        id: string;
        title: string;
        template: string;
        classes: string[];
        width: number;
        height: "auto";
        resizable: boolean;
        closeOnSubmit: boolean;
        submitOnClose: boolean;
        submitOnChange: boolean;
        baseApplication: string;
        top: number;
        left: number;
        scale?: number;
        popOut: boolean;
        minimizable: boolean;
        scrollY: string[];
        tabs: Omit<Tabs.Options, "callback">[];
        dragDrop: Omit<DragDrop.Options, "permissions" | "callbacks">[];
        filters: Omit<SearchFilter.Options, "callback">[];
        editable: boolean;
    };
    /**
     * @override
     */
    activateListeners(html: JQuery): void;
    /**
     * @override
     */
    getData(): any;
    _updateObject(event: any, formData: any): Promise<void>;
    _resetSettings(): Promise<void>;
    private _prepareColorsetList;
    private _prepareTextureList;
    private _prepareFontList;
    private _prepareMaterialList;
    private _deepCopyColorsets;
}
