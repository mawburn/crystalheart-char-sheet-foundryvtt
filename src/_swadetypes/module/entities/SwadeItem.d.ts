import IRollOptions from '../../interfaces/IRollOptions';
import { SysItemData } from '../../interfaces/item-data';
/**
 * Override and extend the basic :class:`Item` implementation
 * @noInheritDoc
 */
export default class SwadeItem extends Item<SysItemData> {
    get isMeleeWeapon(): boolean;
    rollDamage(options?: IRollOptions): Promise<Roll> | Roll;
    getChatData(htmlOptions: any): any;
    /**
     * Assembles data and creates a chat card for the item
     * @returns the rendered chatcard
     */
    show(): Promise<ChatMessage>;
    private _makeExplodable;
    /**
     * @returns the power points for the AB that this power belongs to or null when the item is not a power
     */
    private _getPowerPoints;
    _preCreate(data: any, options: any, user: User): Promise<void>;
    _preDelete(options: any, user: User): Promise<void>;
    _preUpdate(changed: any, options: any, user: User): Promise<void>;
}
