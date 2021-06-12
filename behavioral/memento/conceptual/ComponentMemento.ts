import IMememento from "./IMemento";

export default
class ComponentMemento
implements IMememento
{
  constructor(public state: number) {}
}