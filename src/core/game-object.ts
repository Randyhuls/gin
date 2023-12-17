import { Process } from './process'
import { Vector2D, Animation, Spritesheet } from '.'
import { EventType } from '../events/events'
import { ICollisionEvent } from '../events/types'
import { CollisionType, Origin } from './types'

export type GameObjectProps = {
  id: string
  collision?: boolean
  collisionType?: CollisionType
  collisionBox?: { 
    position?: Vector2D // Object relative position vector
    width: number
    height: number 
  }
  currentAnimation?: Animation
  width?: number
  height?: number
  zIndex?: number
  origin?: Vector2D // Object relative origin vector
  position?: Vector2D
  sprite?: HTMLImageElement
  spritesheet?: Spritesheet
}

class GameObject extends Process {
  private _width: number = 0
  private _height: number = 0
  private _position: Vector2D = Vector2D.ZERO
  private _collisionBox: { position: Vector2D, height: number, width: number } = { 
    position: Vector2D.ZERO, 
    width: 0, 
    height: 0 
  }
  private _currentAnimation: Animation|null = null

  protected frameTicks: number = 1

  public id: string
  public origin: Vector2D = Origin.TOP_LEFT
  public zIndex: number = 0

  public acceleration: number = 0
  public direction: Vector2D = Vector2D.ZERO
  public friction: number = 0
  public maxSpeed: number = 0  
  public velocity: Vector2D = Vector2D.ZERO

  public collision: boolean = false
  public collisionType: CollisionType = CollisionType.RECTANGULAR

  public sprite: HTMLImageElement|null = null
  public spritesheet: Spritesheet|null = null
  public currentFrame: number = 1

  constructor({ id, width, height, zIndex, collision, collisionType, collisionBox, origin, position, sprite, spritesheet, currentAnimation }: GameObjectProps) {
    super()

    this.id = id
    this.width = width || this.width
    this.height = height || this.height
    this.zIndex = zIndex || this.zIndex
    this.origin = origin || this.origin
    this.position = position || this.position
    this.sprite = sprite || this.sprite
    this.spritesheet = spritesheet || this.spritesheet
    this.currentAnimation = currentAnimation || this.currentAnimation
    
    this.collision = collision || this.collision
    this.collisionType = collisionType === undefined ? this.collisionType : collisionType

    this.collisionBox = { 
      width: collisionBox?.width || this._width, 
      height: collisionBox?.height || this._height, 
      position: collisionBox?.position || this._collisionBox.position
    }

    // Listen for collision event
    addEventListener(EventType.COLLISION, (event: CustomEventInit<ICollisionEvent>) => {
      const { detail } = event
      if (this.collision && detail?.sourceId === this.id) this.onCollision && this.onCollision.bind(this, detail.sourceId, detail.targets || []).call()
    }) 
 }

 public get currentAnimation(): Animation|null {
  return this._currentAnimation
 }

 public set currentAnimation(value: Animation|null) {
  this._currentAnimation = value
  this.frameTicks = 0
 }

 public get position(): Vector2D {
  return this._position
 }

 public set position(value: Vector2D) {
  this._position = value
 }

 public get width(): number {
  return this._width
 }

 public set width(value: number) {
  this._width = value
 }

 public get height(): number {
  return this._height
 }
 
 public set height(value: number) {
  this._height = value
 }

 public get collisionBox(): { position: Vector2D, width: number, height: number} {
  return this._collisionBox
 }
 
 public set collisionBox({ position, width, height }: { position: Vector2D, width: number, height: number }) {
  this._collisionBox.position = position
  this._collisionBox.height = height
  this._collisionBox.width = width
 }

 /* Protocols */
 protected onCollision?(sourceId: string, targets: GameObject[]): void
}

export { GameObject }