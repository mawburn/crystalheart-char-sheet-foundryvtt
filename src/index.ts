import './index.scss'

// @ts-ignore
class TestActor extends Actor {
  static get defaultOptions() {
    // @ts-ignore
    const options = mergeObject(super.defaultOptions, {
      classes: ['swade', 'sheet', 'actor', 'character'],
      width: 630,
      height: 768,
      tabs: [
        {
          navSelector: '.tabs',
          contentSelector: '.sheet-body',
          initial: 'summary',
        },
      ],
      scrollY: ['.skills .skills-list', '.quickaccess-list', '.inventory .inventory-categories'],
    })
    options['activeArcane'] = 'All'
    return options
  }

  getData() {
    const data = super.getData()
    const shields = data.itemsByType['shield']
    data.parry = 0
    if (shields) {
      shields.forEach(shield => {
        if (shield.data['equipped']) {
          data.parry += shield.data['parry']
        }
      })
    }
    return data
  }

  _createEditor(target, editorOptions, initialContent) {
    // remove some controls to the editor as the space is lacking
    if (target === 'data.advances.details') {
      editorOptions.toolbar = 'styleselect bullist hr table removeFormat code save '
    }
    super._createEditor(target, editorOptions, initialContent)
  }

  get template() {
    // Later you might want to return a different template
    // based on user permissions.
    return 'modules/crystalheart-char-sheet/templates/sheet.html'
  }

  _getHeaderButtons() {
    let buttons = super._getHeaderButtons()
    // Token Configuration
    //@ts-ignore
    const canConfigure = game.user.isGM || this.actor.owner
    //@ts-ignore
    if (this.options.editable && canConfigure) {
      buttons = [
        {
          //@ts-ignore
          label: game.i18n.localize('SWADE.Tweaks'),
          class: 'configure-actor',
          icon: 'fas fa-dice',
          onclick: ev => this._onConfigureEntity(ev),
        },
      ].concat(buttons)
    }
    return buttons
  }

  _onConfigureEntity(event) {
    event.preventDefault()
    // @ts-ignore
    new game.swade.SwadeEntityTweaks(this.actor).render(true)
  }
}

//@ts-ignore
Hooks.on('init', () => {
  //@ts-ignore
  Actors.registerSheet('crystalheart-swade-sheet', TestActor, {
    types: ['character'],
    label: 'Crystal Heart Character Sheet',
  })

  //@ts-ignore
  preloadHandlebarsTemplates()
})

async function preloadHandlebarsTemplates() {
  const templatePaths = ['modules/crystalheart-char-sheet/templates/sheet.html']

  //@ts-ignore
  return loadTemplates(templatePaths)
}
