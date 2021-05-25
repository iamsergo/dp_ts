export default
interface IUIMediator<T>
{
  notify(component: T): void
}