
import { name, version } from '../package.json'
import { StateManager } from '.'
import { onUpdateEvent } from '../events'
import { Process } from './process'

const { useState } = StateManager
const [, setWaitBeforeStart] = Process.interrupted

export const [isBooting, setIsBooting] = useState<boolean>(false)

const gin = (onReady: () => void) => {
  let ts: number = 0 // Timestamp in seconds
  
  setIsBooting(true)
  setWaitBeforeStart(true)

  const run = (timestamp: number = Date.now()) => {
    // Seconds passed between old and new frame
    const delta: number = (timestamp / 1000) - ts
    const fps = Math.round(1 / delta)

    ts = timestamp / 1000

    // Emit update to listeners
    dispatchEvent(onUpdateEvent(delta, fps))

    // Cycle
    requestAnimationFrame(run.bind(this))
  }

  // Run game loop
  run()

  setIsBooting(false)
  setWaitBeforeStart(false)

  console.log(`Running '${name}:v${version}'`)

  onReady()
}

export { gin }