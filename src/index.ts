import './index.scss'

import CharacterSheet from './sheet/CharacterSheet'

Hooks.on('init', () => {
  Actors.registerSheet('crystalheart-swade-sheet', CharacterSheet, {
    types: ['character'],
    label: 'Crystal Heart Character Sheet',
  })

  preloadHandlebarsTemplates()
})

async function preloadHandlebarsTemplates() {
  const templatePaths = ['modules/crystalheart-char-sheet/templates/sheet.html']

  return loadTemplates(templatePaths)
}
