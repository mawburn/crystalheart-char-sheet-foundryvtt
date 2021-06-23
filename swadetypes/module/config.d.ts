export declare const SWADE: {
    ASCII: string;
    attributes: {
        agility: {
            long: string;
            short: string;
        };
        smarts: {
            long: string;
            short: string;
        };
        spirit: {
            long: string;
            short: string;
        };
        strength: {
            long: string;
            short: string;
        };
        vigor: {
            long: string;
            short: string;
        };
    };
    init: {
        defaultCardCompendium: string;
        cardTable: string;
    };
    packChoices: {};
    imagedrop: {
        height: number;
    };
    bennies: {
        templates: {
            refresh: string;
            refreshAll: string;
            add: string;
            spend: string;
            gmadd: string;
            joker: string;
        };
        sheetImage: string;
        textures: {
            front: string;
            back: string;
        };
    };
    vehicles: {
        maxHandlingPenalty: number;
        opSkills: string[];
    };
    settingConfig: {
        id: string;
        title: string;
        settings: string[];
    };
    diceConfig: {
        id: string;
        title: string;
        flags: {};
    };
    templates: {
        preloadPromise: any;
        templatesPreloaded: boolean;
    };
    statusEffects: ({
        icon: string;
        id: string;
        label: string;
        changes?: undefined;
    } | {
        icon: string;
        id: string;
        label: string;
        changes: {
            key: string;
            value: number;
            mode: number;
        }[];
    })[];
    wildCardIcons: {
        regular: string;
        compendium: string;
    };
    dsnColorSets: {};
    dsnTextureList: {};
    raceLocalizationKey: string;
    allowedActorFlags: any[];
};
