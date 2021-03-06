import CharacterSheet from './CharacterSheet'

Hooks.on('init', () => {
  Actors.registerSheet('crystalheart-char-sheet', CharacterSheet, {
    types: ['character'],
    label: 'Crystal Heart Character Sheet',
  })

  preloadHandlebarsTemplates()
})

async function preloadHandlebarsTemplates() {
  const templatePaths = ['modules/crystalheart-char-sheet/templates/sheet.html']

  return loadTemplates(templatePaths)
}
