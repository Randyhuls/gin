import { Process } from './process';
import { Vector2D, Animation, Spritesheet } from '.';
import { CollisionType } from './types';
export type GameObjectProps = {
    id: string;
    collision?: boolean;
    collisionType?: CollisionType;
    collisionBox?: {
        position?: Vector2D;
        width: number;
        height: number;
    };
    currentAnimation?: Animation;
    width?: number;
    height?: number;
    zIndex?: number;
    origin?: Vector2D;
    position?: Vector2D;
    sprite?: HTMLImageElement;
    spritesheet?: Spritesheet;
};
declare class GameObject extends Process {
    private _width;
    private _height;
    private _position;
    private _collisionBox;
    private _currentAnimation;
    protected frameTicks: number;
    id: string;
    origin: Vector2D;
    zIndex: number;
    acceleration: number;
    direction: Vector2D;
    friction: number;
    maxSpeed: number;
    velocity: Vector2D;
    collision: boolean;
    collisionType: CollisionType;
    sprite: HTMLImageElement | null;
    spritesheet: Spritesheet | null;
    currentFrame: number;
    constructor({ id, width, height, zIndex, collision, collisionType, collisionBox, origin, position, sprite, spritesheet, currentAnimation }: GameObjectProps);
    get currentAnimation(): Animation | null;
    set currentAnimation(value: Animation | null);
    get position(): Vector2D;
    set position(value: Vector2D);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get collisionBox(): {
        position: Vector2D;
        width: number;
        height: number;
    };
    set collisionBox({ position, width, height }: {
        position: Vector2D;
        width: number;
        height: number;
    });
    protected onCollision?(sourceId: string, targets: GameObject[]): void;
}
export { GameObject };
