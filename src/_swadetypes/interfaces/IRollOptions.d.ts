export default interface IRollOptions {
    rof?: number;
    flavour?: string;
    dmgOverride?: string;
    additionalMods?: (string | number)[];
    suppressChat?: boolean;
}
