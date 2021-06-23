import IRollOptions from '../interfaces/IRollOptions';
import SwadeActor from './entities/SwadeActor';
import SwadeItem from './entities/SwadeItem';
/**
 * A helper class for Item chat card logic
 */
export default class ItemChatCardHelper {
    static onChatCardAction(event: any): Promise<Roll>;
    static getChatCardActor(card: any): SwadeActor;
    /**
     * Handles the basic skill/damage/reload AND the additional actions
     * @param item
     * @param actor
     * @param action
     */
    static handleAction(item: SwadeItem, actor: SwadeActor, action: string, additionalMods?: (string | number)[]): Promise<Roll> | null;
    /**
     * Handles misc actions
     * @param item The item that this action is used on
     * @param actor The actor who has the item
     * @param action The action key
     * @returns the evaluated roll
     */
    static handleAdditionalActions(item: SwadeItem, actor: SwadeActor, action: string, additionalMods?: (string | number)[]): Promise<Roll>;
    static doTraitAction(trait: string | SwadeItem, actor: SwadeActor, options: IRollOptions): Promise<Roll>;
    static subtractShots(actor: SwadeActor, itemId: string, shotsUsed?: number): Promise<void>;
    static reloadWeapon(actor: SwadeActor, weapon: SwadeItem): Promise<void>;
    static refreshItemCard(actor: SwadeActor, messageId?: string): Promise<void>;
    static isReloadPossible(actor: SwadeActor): boolean;
}
