export default
abstract class Component
{
  public create(): void
  {
    this.beforeRender()
    this.render()
  }

  public beforeRender(): void {}
  public abstract render(): void
}