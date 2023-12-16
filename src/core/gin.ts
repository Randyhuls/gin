
import { name, version } from '../../package.json'
import { StateManager } from './state-manager'
import { onUpdateEvent } from '../events'
import { Process } from './process'
import { setSettings } from './settings-manager'

const useState = StateManager.useState
const [, setWaitBeforeStart] = Process.interrupted

export const [isBooting, setIsBooting] = useState<boolean>(false)

/**
 * @description Initiate the game loop
 * @param onReady Function that is called when Gin has booted
 */
const gin = (options = {}, onReady?: () => void) => {
  let ts: number = 0 // Timestamp in seconds
  
  setSettings(options)
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

  onReady?.()
}

export { gin }