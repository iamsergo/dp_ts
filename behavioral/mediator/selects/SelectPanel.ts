import IUIMediator from './IUIMediator'
import Selector from './Selector'

export default
class SelectPanel
implements IUIMediator<Selector>
{
  public countrySelector: Selector
  public citySelector: Selector
  public streetSelector: Selector

  constructor()
  {
    this.countrySelector = new Selector(this,{
      Country: ['Russia', 'Belarus']
    })
    this.citySelector = new Selector(this,{
      Russia: ['Moscow'],
      Belarus: ['Minsk']
    })
    this.streetSelector = new Selector(this,{
      Moscow: ['Arbat'],
      Minsk: ['Pobeda']
    })

    this.countrySelector.setValues('Country')
  }

  notify(selector: Selector): void
  {
    switch(selector)
    {
      case this.countrySelector:{
        const parentValue = this.countrySelector.value
        this.citySelector.setValues(parentValue)
        return
      }

      case this.citySelector:{
        const parentValue = this.citySelector.value
        this.streetSelector.setValues(parentValue)
        return
      }

      case this.streetSelector:{
        return
      }
    }
  }

  log(): void
  {
    this.countrySelector.currentValues.length !==0 &&
    console.log(
      'Country:',
      this.countrySelector.currentValues
        .map(v => v === this.countrySelector.value ? `[${v}]` : v)
        .join(' ')
    );
    this.citySelector.currentValues.length !==0 &&
    console.log(
      'City:',
      this.citySelector.currentValues
        .map(v => v === this.citySelector.value ? `[${v}]` : v)
        .join(' ')
    );
    this.streetSelector.currentValues.length !==0 &&
    console.log(
      'Street:',
      this.streetSelector.currentValues
        .map(v => v === this.streetSelector.value ? `[${v}]` : v)
        .join(' ')
    );
  }
}