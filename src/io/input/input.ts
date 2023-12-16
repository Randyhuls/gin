import { Vector2D } from '../../core'
import { KeyboardSchema } from './schemas'
import { InputType, InputSchema } from './types'

class Input {
  private static _shared: Input
  private _activeInput: InputType
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

  get activeInput(): InputType {
    return this._activeInput
  }

  get schema(): InputSchema {
    return this._schema
  }

  set activeInput(type: InputType) {
    switch(type) {
      case InputType.KEYBOARD: this._schema = KeyboardSchema
      default: this._schema = KeyboardSchema
    }

    this._activeInput = type
  }

  public setDefault(input: InputType): Input {
    this.activeInput = input
    return Input.shared
  }

  public isPressed(key: string) {
    return !!this.keys[key]
  }

  public getDirectionX(): Vector2D {
    return this.isPressed(this.schema.LEFT) ? Vector2D.LEFT : this.isPressed(this.schema.RIGHT) ? Vector2D.RIGHT : Vector2D.ZERO
  }

  public getDirectionY(): Vector2D {
    return this.isPressed(this.schema.UP) ? Vector2D.UP : this.isPressed(this.schema.DOWN) ? Vector2D.DOWN : Vector2D.ZERO
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