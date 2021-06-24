import { TemplatePreset } from '../enums/TemplatePresetEnum'
/**
 * A helper class for building MeasuredTemplates for SWADE Burst Templates
 * @noInheritDoc
 */
export default class SwadeTemplate extends MeasuredTemplate {
  moveTime: number
  initialLayer: CanvasLayer
  handlers: {
    mm: any
    rc: any
    lc: any
    mw: any
  }
  /**
   * A factory method to create a SwadeTemplate instance using provided preset
   * @param preset the preset to use.
   * @returns SwadeTemplate | null
   */
  static fromPreset(preset: TemplatePreset): SwadeTemplate
  /**
   * Creates a preview of the template
   * @param {Event} event   The initiating click event
   */
  drawPreview(): void
  /**
   * Activate listeners for the template preview
   */
  activatePreviewListeners(): void
  destroy(...args: any[]): void
}
