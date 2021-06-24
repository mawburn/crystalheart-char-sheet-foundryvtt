export default class Bennies {
    static spendEvent(ev: MouseEvent): Promise<void>;
    /**
     * Refresh the bennies of a character
     * @param user the User the character belongs to
     * @param displayToChat display a message to chat
     *
     */
    static refresh(user: User, displayToChat?: boolean): Promise<void>;
    static refreshAll(): Promise<void>;
    static giveEvent(ev: MouseEvent): Promise<void>;
    private static updateBenny;
    static append(player: HTMLElement, options: any): void;
}
