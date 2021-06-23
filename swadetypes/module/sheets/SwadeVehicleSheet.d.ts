import SwadeBaseActorSheet from './SwadeBaseActorSheet';
/**
 * @noInheritDoc
 */
export default class SwadeVehicleSheet extends SwadeBaseActorSheet {
    /**
     * Extend and override the default options used by the Actor Sheet
     * @returns {Object}
     */
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
    get template(): string;
    activateListeners(html: JQuery<HTMLElement>): void;
    /**
     * @override
     */
    getData(): Promise<any>;
    /**
     * Determines the cargo inventory of the vehicle, sorting out all the non-vehicular items
     * @param itemsByType an object with the items filtered by type
     */
    private _determineCargo;
    setDriver(id: string): Promise<void>;
    private _fetchDriver;
    private _resetDriver;
    private _openDriverSheet;
    private _createItemData;
    /**
     * calculate how many modslots are used
     */
    private _calcModSlotsUsed;
    /**
     * calculate how many percent of modslots are used
     * @param modsUsed number of active modslots
     */
    private _calcModsPercentage;
    private _buildOpSkillList;
}
