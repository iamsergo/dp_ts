export default
interface IMediator<T>
{
  notify(component: T): void
}