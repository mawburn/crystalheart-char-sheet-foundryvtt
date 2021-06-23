import SwadeActor from './entities/SwadeActor';
export declare function formatRoll(chatMessage: ChatMessage, html: JQuery<HTMLElement>, data: any): Promise<void>;
export declare function chatListeners(html: JQuery<HTMLElement>): void;
/**
 * Hide the display of chat card action buttons which cannot be performed by the user
 */
export declare function hideChatActionButtons(message: ChatMessage, html: JQuery<HTMLElement>, data: any): void;
/**
 * Creates an end message for Conviction
 * @param actor The Actor whose conviction is ending
 */
export declare function createConvictionEndMessage(actor: SwadeActor): Promise<void>;
/**
 * Creates a chat message for GM Bennies
 */
export declare function createGmBennyAddMessage(user?: User, given?: boolean): Promise<void>;
export declare function rerollFromChat(li: JQuery<HTMLElement>, spendBenny: boolean): Promise<void>;
