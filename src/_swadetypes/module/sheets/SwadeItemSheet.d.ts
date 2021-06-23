import SwadeItem from '../entities/SwadeItem';
/**
 * @noInheritDoc
 */
export default class SwadeItemSheet extends ItemSheet {
    get item(): SwadeItem;
    static get defaultOptions(): {
        width: number;
        height: "auto";
        classes: string[];
        tabs: {
            navSelector: string;
            contentSelector: string;
            initial: string;
        }[];
        scrollY: string[];
        resizable: boolean;
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
        dragDrop: Omit<DragDrop.Options, "permissions" | "callbacks">[];
        filters: Omit<SearchFilter.Options, "callback">[];
        closeOnSubmit: boolean;
        submitOnChange: boolean;
        submitOnClose: boolean;
        editable: boolean;
    };
    /**
     * Return a dynamic reference to the HTML template path used to render this Item Sheet
     * @return {string}
     */
    get template(): string;
    /**
     * Extend and override the sheet header buttons
     * @override
     */
    protected _getHeaderButtons(): Application.HeaderButton[];
    protected _onConfigureEntity(event: Event): void;
    activateListeners(html: any): void;
    /**
     * Prepare item sheet data
     * Start with the base item data and extending with additional properties for rendering.
     */
    getData(): any;
    /**
     * @override
     */
    _onDrop(event: DragEvent): Promise<boolean>;
}
