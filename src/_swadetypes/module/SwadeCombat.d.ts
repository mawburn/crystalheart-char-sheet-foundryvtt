interface IPickACard {
    cards: JournalEntry[];
    combatantName: string;
    oldCardId?: string;
    enableRedraw?: boolean;
    isQuickDraw?: boolean;
}
export default class SwadeCombat extends Combat {
    /**
     * @override
     * Roll initiative for one or multiple Combatants within the Combat entity
     * @param {Array|string} ids        A Combatant id or Array of ids for which to roll
     * @param {string|null} formula     A non-default initiative formula to roll. Otherwise the system default is used.
     * @param {Object} messageOptions   Additional options with which to customize created Chat Messages
     * @return {Promise.<Combat>}       A promise which resolves to the updated Combat entity once updates are complete.
     */
    rollInitiative(ids: string[] | string, { messageOptions, }?: {
        formula?: string | null;
        messageOptions?: any;
        updateTurn?: boolean;
    }): Promise<this>;
    /**
     * @override
     * @param a Combatant A
     * @param b Combatant B
     */
    _sortCombatants: (a: any, b: any) => any;
    /** @override */
    resetAll(): Promise<this>;
    /**
     * Draws cards from the Action Cards table
     * @param count number of cards to draw
     * @returns an array with the drawn cards
     */
    drawCard(count?: number): Promise<JournalEntry[]>;
    /**
     * Asks the GM to pick a card
     * @param cards an array of cards
     * @param combatantName name of the combatant
     * @param oldCardId id of the old card, if you're picking cards for a redraw
     * @param maxCards maximum number of cards to be displayed
     * @param enableRedraw sets whether a redraw is allowed
     * @param isQuickDraw sets whether this draw includes the Quick edge
     */
    pickACard({ cards, combatantName, oldCardId, enableRedraw, isQuickDraw, }: IPickACard): Promise<JournalEntry>;
    /**
     * Find a card from the deck based on it's suit and value
     * @param cardValue
     * @param cardSuit
     */
    findCard(cardValue: number, cardSuit: number): Promise<JournalEntry>;
    /**
     * @override
     */
    startCombat(): Promise<this>;
    /**
     * @override
     */
    nextTurn(): Promise<void>;
    /** @override */
    nextRound(): Promise<void>;
    protected _getInitResetUpdates(): any;
    _preDelete(options: any, user: User): Promise<void>;
}
export {};
