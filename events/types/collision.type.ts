import { GameObject } from '../../core'

export interface ICollisionEvent {
  sourceId: string
  targets: GameObject[]
}