import { SettingsType } from './types'

export let settings: SettingsType = {
  collisionSettings: {
    BROAD_SCAN_RANGE: 60
  }
}
export const setSettings = (options = {}) => {
  settings = { ...settings, ...options }
}