import SwadeActor from './_swadetypes/module/entities/SwadeActor'
import Sheet from './sheet/Sheet.svelte'

export default class CharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      classes: ['chswade'],
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
    return 'modules/crystalheart-char-sheet/templates/sheet.html'
  }

  /**
   * @override
   */
  get actor(): SwadeActor {
    return super.actor as SwadeActor
  }

  activateListeners() {
    const sheet = new Sheet({
      target: document.querySelector(`#${super.id} .chswade-sheet`)!,
      props: {
        actor: (super.actor as SwadeActor).data,
      },
    })

    return sheet
  }
}