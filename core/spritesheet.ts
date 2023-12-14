import { AssetManager } from './asset-manager'
import { SpriteAnimation, SpriteAnimationFrame, SpriteAnimationSet } from './types/sprite-animation.type'
import { Animation } from './animation'
import { RawSpritesheet } from './types/spritesheet.type'
import { importFile } from './utils'

type SpritesheetProps = {
  id: string
  animations: SpriteAnimationSet
}

class Spritesheet {
  private _id: string
  private _animations: SpriteAnimationSet = {}

  public sprite: HTMLImageElement

  constructor(props?: SpritesheetProps) {
    if (!props) return

    const { id, animations } = props

    this._id = id
    this._animations = animations
  }

  public get id() {
    return this._id
  }

  public get animations() {
    return this._animations
  }

  public static async fromRawSpritesheet(path: string): Promise<Spritesheet> {
    const { assetId, animations } = await importFile<RawSpritesheet>(path)
    
    const spritesheet = new Spritesheet()
    spritesheet._id = assetId
    spritesheet._animations = animations
    spritesheet.sprite = AssetManager.manager.getImageById(assetId) as HTMLImageElement

    return spritesheet
  }

  public getAnimationById(id: string): Animation {
    const rawAnimation: SpriteAnimation|undefined = this.animations[id]
    
    if (!rawAnimation) throw new Error(`No animation found with id: ${id}`)
    
    return new Animation({ assetId: this.id, id, fps: rawAnimation.fps, frames: rawAnimation.frames })
  }

  public getAnimationFramesById(id: string): SpriteAnimationFrame[] {
    const frames: SpriteAnimationFrame[]|undefined = this.animations[id]?.frames

    if (!frames || frames.length === 0) throw new Error(`No animation frames found for id: ${id}`)

    return frames
  }

  public drawAnimationById(id: string) {

  }
}

export { Spritesheet }