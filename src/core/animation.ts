import { SpriteAnimationFrame, SpriteAnimation } from './types/sprite-animation.type'

type AnimationProps = {
  assetId: string
  fps: number
  frames: SpriteAnimationFrame[]
  id: string
}

class Animation {
  public assetId: string = ''
  public id: string = ''
  public index: number = 0
  public fps: number = 0
  public frames: SpriteAnimationFrame[]

  constructor(props?: AnimationProps) {
    if (!props) return

    const { assetId, fps, frames, id } = props

    this.assetId = assetId || ''
    this.id = id || ''
    this.fps = fps || 0
    this.fps = fps || 0
    this.frames = frames || []
  }

  public static fromRawSpriteAnimation(assetId: string, id: string, spriteAnimation: SpriteAnimation): Animation {
    const { fps, frames } = spriteAnimation

    return new Animation({
      assetId,
      fps,
      frames,
      id
    })
  }

  public nextFrame(): void {
    this.index = this.index < this.frames.length ? +1 : 0
  }
}

export { Animation, AnimationProps }