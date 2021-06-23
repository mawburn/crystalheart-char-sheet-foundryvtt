import SwadeActor from './entities/SwadeActor';
export default class SwadeHooks {
    static onSetup(): void;
    static onReady(): Promise<void>;
    static onRenderActorDirectory(app: ActorDirectory, html: JQuery<HTMLElement>, options: any): void;
    static onRenderCompendium(app: Compendium, html: JQuery<HTMLElement>, data: any): Promise<void>;
    static onUpdateActor(actor: SwadeActor, updateData: any, options: any, userId: string): void;
    static onRenderCombatTracker(app: CombatTracker, html: JQuery<HTMLElement>, data: any): void;
    static onUpdateCombatant(combatant: any, updateData: any, options: any, userId: string): Promise<void>;
    static onRenderChatMessage(message: ChatMessage, html: JQuery<HTMLElement>, data: any): Promise<void>;
    static onGetChatLogEntryContext(html: JQuery<HTMLElement>, options: any[]): void;
    static onGetCombatTrackerEntryContext(html: JQuery<HTMLElement>, options: any[]): Promise<void>;
    static onRenderPlayerList(list: any, html: JQuery<HTMLElement>, options: any): Promise<void>;
    static onRenderChatLog(app: any, html: JQuery<HTMLElement>, data: any): void;
    static onGetUserContextOptions(html: JQuery<HTMLElement>, context: any[]): void;
    static onGetSceneControlButtons(sceneControlButtons: SceneControl[]): void;
    static onDropActorSheetData(actor: Actor, sheet: ActorSheet, data: any): Promise<boolean>;
    static onRenderCombatantConfig(app: FormApplication, html: JQuery<HTMLElement>, options: any): Promise<boolean>;
    static onDiceSoNiceInit(dice3d: any): void;
    static onDiceSoNiceReady(dice3d: any): void;
}
