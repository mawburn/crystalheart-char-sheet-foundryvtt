export declare function migrateWorld(): Promise<void>;
/**
 * Apply migration rules to all Entities within a single Compendium pack
 * @param pack The compendium to migrate. Only Actor, Item or Scene compendiums are processed
 */
export declare function migrateCompendium(pack: Compendium): Promise<void>;
/**
 * Migrate a single Actor entity to incorporate latest data model changes
 * Return an Object of updateData to be applied
 * @param {object} actorData    The actor data object to update
 * @return {Object}         The updateData to apply
 */
export declare function migrateActorData(actorData: any): {};
export declare function migrateItemData(itemData: any): {};
/**
 * Migrate a single Scene entity to incorporate changes to the data model of it's actor data overrides
 * Return an Object of updateData to be applied
 * @param {Object} sceneData  The Scene data to Update
 * @return {Object}       The updateData to apply
 */
export declare function migrateSceneData(sceneData: any): {
    tokens: any;
};
/**
 * Purge the data model of any inner objects which have been flagged as _deprecated.
 * @param {object} data   The data to clean
 * @private
 */
export declare function removeDeprecatedObjects(data: any): any;
