import SwadeActor from './entities/SwadeActor';
import SwadeItem from './entities/SwadeItem';
export declare function createActionCardTable(rebuild?: boolean, cardpack?: string): Promise<void>;
/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
export declare function createSwadeMacro(data: Hotbar.DropData, slot: string): Promise<void>;
/**
 * @deprecated
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} skillName
 * @return {Promise}
 */
export declare function rollSkillMacro(skillName: any): any;
/**
 * @deprecated
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} skillName
 * @return {Promise}
 */
export declare function rollWeaponMacro(weaponName: any): any;
/**
 * @deprecated
 * @param powerName
 * @returns
 */
export declare function rollPowerMacro(powerName: any): any;
/**
 *
 * @param itemName
 * @returns
 */
export declare function rollItemMacro(itemName: string): any;
/**
 *
 * @param string The string to look for
 * @param localize Switch which determines if the string is a localization key
 */
export declare function notificationExists(string: string, localize?: boolean): boolean;
export declare function shouldShowBennyAnimation(): Promise<boolean>;
export declare function getCanvas(): Canvas;
/**
 *
 * @param traitName The name of the trait to be found
 * @param actor The actor to find it from
 * @returns Returns a string of the trait name in the data model if it's an attribute or an Item if it is a skill. If it can find neither an attribute nor a skill then it returns null
 */
export declare function getTrait(traitName: string, actor: SwadeActor): SwadeItem | string;
