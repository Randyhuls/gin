import { EventType } from '../events/events'
import { IUpdateEvent } from '../events/types'
import { StateManager } from './state-manager'

const { useState } = StateManager

export abstract class Process { 
  public static interrupted = useState<boolean>(false)

  private fps: number = 0
  private pc: number = 0
   
  constructor() {
    const [isInterrupted] = Process.interrupted

    // Listen for game loop updates
    addEventListener(EventType.UPDATE, (event: CustomEventInit<IUpdateEvent>) => {
    const { detail } = event
    !isInterrupted() && (
      this.fps = detail?.fps || 0,
      this.pc++,
      this.onUpdate?.bind(this, detail?.delta || 0, detail?.fps || 0).call()
    )
    })
  }

  /**
   * 
   * @param fps The frames per second to throttle down to
   * @param onUpdate Callback when the max frame rate has been met
   */
    protected throttle(fps: number, onUpdate: () => void) {
      this.pc % (this.fps - fps) === 0 && onUpdate()
    }
  
    /**
     * 
     * @param delta Seconds passed between old and new frame
     * @param fps Frames per second
     */
    protected onUpdate?(delta: number, fps: number): void
}