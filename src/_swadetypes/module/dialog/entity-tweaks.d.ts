import SwadeActor from '../entities/SwadeActor';
import SwadeItem from '../entities/SwadeItem';
export default class SwadeEntityTweaks extends FormApplication {
    constructor(object: any, options?: {});
    object: SwadeActor | SwadeItem;
    static get defaultOptions(): FormApplication.Options;
    /**
     * Add the Entity name into the window title
     * @type {String}
     */
    get title(): string;
    /**
     * @override
     */
    get template(): string;
    /**
     * Construct and return the data object used to render the HTML template for this form application.
     * @return {Object}
     */
    getData(): any;
    /** @override */
    activateListeners(html: any): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event {Event}       The initial triggering submission event
     * @param formData {Object}   The object of validated form data with which to update the object
     * @private
     */
    _updateObject(event: any, formData: any): Promise<void>;
    private _getAppropriateSettingFields;
    private _handleAdditionalStats;
    private _isActor;
}
