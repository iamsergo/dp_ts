export default class Levelable<T>
{
  public level : number
  public value : T
  
  constructor(value : T, level : number)
  {
    this.level = level
    this.value = value
  }
}