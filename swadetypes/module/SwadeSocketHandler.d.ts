export default class SwadeSocketHandler {
    SWADE: string;
    constructor();
    /**
     * registers all the socket listeners
     */
    registerSocketListeners(): void;
    deleteConvictionMessage(messageId: string): void;
    private _onDeleteConvictionMessage;
    private _onNewRound;
    private _onUnknownSocket;
}
