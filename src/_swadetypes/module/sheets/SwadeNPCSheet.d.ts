import SwadeBaseActorSheet from './SwadeBaseActorSheet';
/**
 * @noInheritDoc
 */
export default class SwadeNPCSheet extends SwadeBaseActorSheet {
    static get defaultOptions(): {
        classes: string[];
        width: number;
        height: number;
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
        resizable: boolean;
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
    get template(): "systems/swade/templates/actors/npc-sheet.html" | "systems/swade/templates/actors/limited-sheet.html";
    _createEditor(target: any, editorOptions: any, initialContent: any): void;
    _renderInner(data: any, options: any): Promise<JQuery<HTMLElement>>;
    activateListeners(html: JQuery): void;
    getData(): any;
}
