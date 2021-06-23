/**
 * This is the TypeScript entry file for Foundry VTT.
 * Author: FloRad
 * Content License: All Rights Reserved Pinnacle Entertainment, Inc
 * Software License: Apache License, Version 2.0
 */
import SwadeEntityTweaks from './module/dialog/entity-tweaks'
import ItemChatCardHelper from './module/ItemChatCardHelper'
import * as migrations from './module/migration'
import SwadeSocketHandler from './module/SwadeSocketHandler'
import { rollItemMacro, rollPowerMacro, rollSkillMacro, rollWeaponMacro } from './module/util'
export declare const swadeGame: {
  SwadeEntityTweaks: typeof SwadeEntityTweaks
  rollSkillMacro: typeof rollSkillMacro
  rollWeaponMacro: typeof rollWeaponMacro
  rollPowerMacro: typeof rollPowerMacro
  rollItemMacro: typeof rollItemMacro
  sockets: SwadeSocketHandler
  itemChatCardHelper: typeof ItemChatCardHelper
  migrations: typeof migrations
}
