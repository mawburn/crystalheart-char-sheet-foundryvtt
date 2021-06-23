export default class SettingConfigurator extends FormApplication {
    config: any;
    settingStats: any;
    constructor(object?: {}, options?: Application.RenderOptions);
    static get defaultOptions(): {
        id: string;
        title: string;
        template: string;
        classes: string[];
        scrollY: string[];
        width: number;
        height: "auto";
        top: number;
        left: number;
        resizable: boolean;
        closeOnSubmit: boolean;
        submitOnClose: boolean;
        submitOnChange: boolean;
        baseApplication: string;
        scale?: number;
        popOut: boolean;
        minimizable: boolean;
        tabs: Omit<Tabs.Options, "callback">[];
        dragDrop: Omit<DragDrop.Options, "permissions" | "callbacks">[];
        filters: Omit<SearchFilter.Options, "callback">[];
        editable: boolean;
    };
    /**
     * @override
     */
    getData(): any;
    activateListeners(html: any): void;
    _updateObject(event: any, formData: any): Promise<void>;
    _resetSettings(): Promise<void>;
    _onClickAttributeControl(event: any): Promise<void>;
    private _handleKeyValidityCheck;
    /**
     * Remove attributes which are no longer use
     * @param attributes
     * @param base
     */
    private _handleDeletableAttributes;
    private _buildCoreSkillPackChoices;
}
