import SwadeActor from '../_swadetypes/module/entities/SwadeActor'

export default class CharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return {
      ...this.defaultOptions,
      classes: ['swade-official', 'sheet', 'actor'],
      width: 630,
      height: 700,
      resizable: true,
      tabs: [
        {
          navSelector: '.tabs',
          contentSelector: '.sheet-body',
          initial: 'summary',
        },
      ],
    }
  }

  get template() {
    return '/templates/official/sheet.html'
  }

  /**
   * @override
   */
  get actor(): SwadeActor {
    return this.actor as SwadeActor
  }
}
