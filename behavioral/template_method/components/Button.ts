import Component from './Component'

export default
class Button
extends Component
{
  private text: string = ''
  private isLoading: boolean = false

  public beforeRender(): void
  {
    console.log('Before render hook <Button>')
    this.isLoading = true
    // ... request data
    this.text = 'Click me!'
    this.isLoading = false
  }

  public render(): void
  {
    console.log(`<Button>${this.isLoading ? '...' : this.text}</Button>\n\n`)
  }
}