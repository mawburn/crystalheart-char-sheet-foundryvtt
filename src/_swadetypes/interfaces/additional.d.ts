export interface AdditionalStat {
  dtype: string
  hasMaxValue: boolean
  label: string
  useField?: boolean
  value?: string | number
  max?: string | number
  modifier?: string
}
export interface ItemAction {
  name: string
  type: 'skill' | 'damage'
  rof?: number
  shotsUsed?: number
  skillMod?: string
  skillOverride?: string
  dmgMod?: string
  dmgOverride?: string
}
