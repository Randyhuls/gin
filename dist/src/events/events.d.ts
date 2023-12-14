import { GameObject } from '../core';
import { IUpdateEvent, ICollisionEvent } from './types';
export declare enum EventType {
    COLLISION = "COLLISION",
    UPDATE = "UPDATE"
}
export declare const onUpdateEvent: (delta: number, fps: number) => CustomEvent<IUpdateEvent>;
export declare const onCollisionEvent: (sourceId: string, targets: GameObject[]) => CustomEvent<ICollisionEvent>;
