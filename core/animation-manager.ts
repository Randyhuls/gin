import { Process } from './process'
import { RawSpritesheet } from './types/spritesheet.type'
import { importFile } from './utils'

class AnimationManager {
  private static _manager: AnimationManager
 

  public static get manager() {
    if (!this.manager) this._manager = new AnimationManager()
    return this._manager
  }

  public getAnimationsBySpritesheetId(id: string) {

  }


}

export { AnimationManager }