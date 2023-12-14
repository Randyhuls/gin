import { SpriteAnimationSet } from './sprite-animation.type'

export interface RawSpritesheet {
  assetId: string
  src: string
  animations: SpriteAnimationSet
}