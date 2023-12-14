import { GameObject } from '../core'
import { IUpdateEvent, ICollisionEvent } from './types'

export enum EventType {
  COLLISION = 'COLLISION',
  UPDATE = 'UPDATE'
}

export const onUpdateEvent = (delta: number, fps: number): CustomEvent<IUpdateEvent> => new CustomEvent<IUpdateEvent>(EventType.UPDATE, { detail: { delta, fps } })
export const onCollisionEvent = (sourceId: string, targets: GameObject[]): CustomEvent<ICollisionEvent> => new CustomEvent<ICollisionEvent>(EventType.COLLISION, { detail: { sourceId, targets } })