export default
class Computer
{
  state: boolean = false

  on() : void
  {
    this.state = true
    console.log('PC is on!')    
  }

  off(): void
  {
    this.state = false
    console.log('PC is off...')
  }
}