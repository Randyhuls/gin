import { EventType } from '../events/events'
import { IUpdateEvent } from '../events/types'


export abstract class Process { 
  public interrupted: boolean = false
   
  constructor() {
     // Listen for game loop updates
     addEventListener(EventType.UPDATE, (event: CustomEventInit<IUpdateEvent>) => {
      const { detail } = event
      this.onUpdate && this.onUpdate.bind(this, detail?.delta || 0, detail?.fps || 0).call()
     })
  }

  protected onUpdate?(delta: number, fps: number): void
}