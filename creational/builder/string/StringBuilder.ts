export default class StringBuilder
{
  private str : string

  constructor(str ?: string)
  {
    this.str = str || ''
  }

  append(s : string) : StringBuilder
  {
    this.str += s
    return this
  }

  replace(sv : string, rv : string) : StringBuilder
  {
    this.str.replace(sv,rv)
    return this
  }

  build() : string
  {
    return this.str
  }
}