import { SysActorData } from '../../interfaces/actor-data'
import IRollOptions from '../../interfaces/IRollOptions'
import SwadeItem from './SwadeItem'
interface ITraitRollModifier {
  label: string
  value: string
}
/**
 * @noInheritDoc
 */
export default class SwadeActor extends Actor<SysActorData, SwadeItem> {
  /**
   * @returns true when the actor is a Wild Card
   */
  get isWildcard(): boolean
  /**
   * @returns true when the actor has an arcane background or a special ability that grants powers.
   */
  get hasArcaneBackground(): boolean
  /**
   * @returns true when the actor is currently in combat and has drawna joker
   */
  get hasJoker(): boolean
  /**
   * @returns an object that contains booleans which denote the current status of the actor
   */
  get status(): any
  /** @override */
  prepareBaseData(): void
  /** @override */
  prepareDerivedData(): void
  rollAttribute(abilityId: string, options?: IRollOptions): Promise<Roll> | Roll
  rollSkill(skillId: string, options?: IRollOptions, tempSkill?: SwadeItem): Promise<Roll> | Roll
  makeUnskilledAttempt(options?: IRollOptions): Promise<Roll>
  spendBenny(): Promise<void>
  getBenny(): Promise<void>
  /**
   * Reset the bennies of the Actor to their default value
   * @param displayToChat display a message to chat
   */
  refreshBennies(displayToChat?: boolean): Promise<void>
  /**
   * Calculates the total Wound Penalties
   */
  calcWoundPenalties(): number
  /**
   * Calculates the total Fatigue Penalties
   */
  calcFatiguePenalties(): number
  calcStatusPenalties(): number
  /**
   * Function for shorcut roll in item (@str + 1d6)
   * return something like : {agi: "1d8x8+1", sma: "1d6x6", spi: "1d6x6", str: "1d6x6-1", vig: "1d6x6"}
   */
  getRollShortcuts(): {}
  /**
   * @override
   */
  getRollData(): {}
  /**
   * Calculates the correct armor value based on SWADE v5.5 and returns that value
   */
  calcArmor(): number
  /**
   * Calculates the Toughness value and returns it, optionally with armor
   * @param includeArmor include armor in final value (true/false). Default is true
   */
  calcToughness(includeArmor?: boolean): number
  /**
   * Calculates the maximum carry capacity based on the strength die and any adjustment steps
   */
  calcMaxCarryCapacity(): number
  calcParry(): number
  /**
   * Helper Function for Vehicle Actors, to roll Maneuevering checks
   */
  rollManeuverCheck(event?: any): Promise<void>
  getDriver(): Promise<SwadeActor>
  protected _handleComplexSkill(
    skill: SwadeItem,
    options: IRollOptions
  ): [Roll, ITraitRollModifier[]]
  /**
   * @param sides number of sides of the die
   * @param flavor flavor of the die
   * @param modifiers modifiers to the die
   * @returns a Die instance that already has the exploding modifier by default
   */
  private _buildTraitDie
  private _buildWildDie
  private _buildTraitRollModifiers
  _preCreate(data: any, options: any, user: User): Promise<void>
  _preUpdate(changed: any, options: any, user: User): Promise<void>
}
export {}
