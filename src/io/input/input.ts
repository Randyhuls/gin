import { Vector2D } from '../../core'
import { InputSchema } from './types'

class Input {
  private static _shared: Input
  private _schema: InputSchema

  public keys: { [key: string|number]: boolean } = {}

  public static get shared() {
    if (!this._shared) this._shared = new Input()
    return this._shared
  }

  public listen() {
    addEventListener('keydown', (event: KeyboardEvent) => {
      const { code } = event
      if (!this.onKeyDownPressed) this.keys[code] = true
      this.onKeyDownPressed?.bind(this, event)?.call()         
    })

    addEventListener('keyup', (event: KeyboardEvent) => {
      const { code } = event
      if (!this.onKeyUpPressed) this.keys[code] = false 
      this.onKeyUpPressed?.bind(this, event)?.call()
    })
  }

  public getSchema<T>(): T & InputSchema {
    return this._schema as T & InputSchema
  }

  public setSchema<T>(schema: T & InputSchema): Input {
    this._schema = schema
    return this
  }
  public isPressed(key: string) {
    return !!this.keys[key]
  }

  public getDirectionX(): Vector2D {
    return this.isPressed(this._schema.LEFT) ? Vector2D.LEFT : this.isPressed(this._schema.RIGHT) ? Vector2D.RIGHT : Vector2D.ZERO
  }

  public getDirectionY(): Vector2D {
    return this.isPressed(this._schema.UP) ? Vector2D.UP : this.isPressed(this._schema.DOWN) ? Vector2D.DOWN : Vector2D.ZERO
  }

  /**
   * @description onKeyUp hook
   */
  public onKeyUpPressed?(event: KeyboardEvent): void

   /**
   * @description onKeyDown hook
   */
   public onKeyDownPressed?(event: KeyboardEvent): void
}

export { Input }