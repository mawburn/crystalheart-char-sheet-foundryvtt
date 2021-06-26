import { AdditionalStat } from './additional';
import { SysItemData } from './item-data';
export interface CharacterCommon {
    attributes: {
        agility: {
            die: {
                sides: number;
                modifier: number;
            };
            'wild-die': {
                sides: number;
            };
        };
        smarts: {
            die: {
                sides: number;
                modifier: number;
            };
            'wild-die': {
                sides: number;
            };
            animal: boolean;
        };
        spirit: {
            die: {
                sides: number;
                modifier: number;
            };
            'wild-die': {
                sides: number;
            };
            unShakeBonus: number;
        };
        strenght: {
            die: {
                sides: number;
                modifier: number;
            };
            'wild-die': {
                sides: number;
            };
            encumbranceSteps: number;
        };
        vigor: {
            die: {
                sides: number;
                modifier: number;
            };
            'wild-die': {
                sides: number;
            };
        };
    };
    stats: {
        speed: {
            runningDie: number;
            runningMod: number;
            value: number;
        };
        toughness: {
            value: number;
            armor: number;
            modifier: number;
        };
        parry: {
            value: number;
            modifier: number;
        };
        size: number;
    };
    details: {
        currency: number;
        wealth: {
            die: number;
            modifier: number;
            'wild-die': number;
        };
        autoCalcToughness: boolean;
        autoCalcParry: boolean;
        biography: {
            value: string;
        };
        species: {
            name: string;
        };
        conviction: {
            value: number;
            active: boolean;
        };
    };
    fatigue: {
        value: number;
        min: number;
        max: number;
    };
    wounds: {
        value: number;
        min: number;
        max: number;
        ignored: number;
    };
    advances: {
        value: number;
        rank: string;
        details: string;
    };
    bennies: {
        value: number;
        max: number;
    };
    status: {
        isShaken: boolean;
        isDistracted: boolean;
        isVulnerable: boolean;
        isStunned: boolean;
        isEntangled: boolean;
        isBound: boolean;
    };
    initiative: {
        hasHesitant: boolean;
        hasLevelHeaded: boolean;
        hasImpLevelHeaded: boolean;
        hasQuick: boolean;
    };
    powerPoints: {
        value: number;
        max: number;
    } & Record<string, {
        value: number;
        max: number;
    }>;
    additionalStats: Partial<Record<string, AdditionalStat>>;
    wildcard: boolean;
}
export interface VehicleCommon {
    size: number;
    scale: number;
    classification: string;
    handling: number;
    cost: number;
    topspeed: number;
    description: string;
    maxCargo: number;
    maxMods: number;
    additionalStats: Partial<Record<string, AdditionalStat>>;
    toughness: {
        total: number;
        armor: number;
    };
    wounds: {
        value: number;
        max: number;
        ignored: number;
    };
    crew: {
        required: {
            value: number;
            max: number;
        };
        optional: {
            value: number;
            max: number;
        };
    };
    driver: {
        id: string;
        skill: string;
        skillAlternative: string;
    };
    status: {
        isOutOfControl: boolean;
        isWrecked: boolean;
    };
    initiative: {
        hasHesitant: boolean;
        hasLevelHeaded: boolean;
        hasImpLevelHeaded: boolean;
        hasQuick: boolean;
    };
}
interface CharacterActorData extends Actor.Data<CharacterCommon, SysItemData> {
    type: 'character';
}
interface NpcActorData extends Actor.Data<CharacterCommon, SysItemData> {
    type: 'npc';
}
interface VehicleActorData extends Actor.Data<VehicleCommon, SysItemData> {
    type: 'vehicle';
}
export declare type SysActorData = CharacterActorData | NpcActorData | VehicleActorData;
export {};
