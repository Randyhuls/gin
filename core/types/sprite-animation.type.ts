import { Position } from './position.type'

export type SpriteAnimationFrame = {
  index: number
  width: number
  height: number
  position: Position
  origin: Position
  collisionBox: {
    position: Position
    width: 32,
    height: 32
  }
}

export type SpriteAnimation = { 
  fps: number
  frames: SpriteAnimationFrame[]
}

export type SpriteAnimationSet = {
  [key: string]: SpriteAnimation
}