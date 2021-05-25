import SelectPanel from './SelectPanel'

const selectPanel = new SelectPanel()

console.log('\ninitial state:');
selectPanel.log()

console.log('\nafter country select:');
selectPanel.countrySelector.select('Russia')
selectPanel.log()

console.log('\nafter city select:');
selectPanel.citySelector.select('Moscow')
selectPanel.log()

console.log('\nafter street select:');
selectPanel.streetSelector.select('Arbat')
selectPanel.log()