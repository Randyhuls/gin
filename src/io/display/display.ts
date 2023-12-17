import { Body2D, GameObject, Vector2D } from '../../core'
import { CollisionType } from '../../core/types'
import { SpriteAnimationFrame } from '../../core/types/sprite-animation.type'

export type DisplayProps = {
  canvas: HTMLCanvasElement
  screenWidth: number
  screenHeight: number
  backgroundColor?: string
  showCollisionBoxes?: boolean
}

class Display {
  private static _shared: Display

  private _canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D

  public showCollisionBoxes: boolean

  public get canvas() {
    return this._canvas
  }

  public static get shared(): Display | undefined {
    if (!this._shared) {
      console.warn('The shared property cannot be accessed until .create() has been called')
      return
    }
    return this._shared
  }

  public static create(props?: DisplayProps): Display {
    if (!props && !this._shared?.canvas) throw new Error('Display requires DisplayProps if it has not been instantiated before')
    if (this._shared?.canvas) throw new Error('The Display has already been initiated')
    if (this._shared) return this._shared

    const display: Display = this._shared = new Display()    
    const { canvas, screenWidth, screenHeight, backgroundColor, showCollisionBoxes } = props as DisplayProps
    
    display._canvas = canvas
    display.ctx = this._shared.canvas.getContext('2d') as CanvasRenderingContext2D

    display.canvas.width = screenWidth
    display.canvas.height = screenHeight
    display.canvas.style.backgroundColor = backgroundColor || '#000000' 

    display.showCollisionBoxes = !!showCollisionBoxes

    return display
  }

  public getScreenSizeVector(): Vector2D {
    return new Vector2D(this.canvas.width, this.canvas.height)
  }

  public clearDisplay() {
    const { canvas: { width, height }, ctx } = this
    ctx.clearRect(0, 0, width, height)
  }

  public renderText(text: string = 'abc', x: number = 0, y: number = 0, fontSize: number = 16, color: string = '#FFFFFF') {
    const { ctx } = this
    ctx.fillStyle = color
    ctx.font = `${fontSize}px sans-serif`
    ctx.fillText(text, x, y)
  }

  public renderImage(object: GameObject) {
    const { ctx } = this
    const { width, height, position: { x, y }, currentAnimation, sprite, currentFrame, spritesheet } = object

    this.shouldRenderCollision(object)
    //if (currentAnimation) {
      //const { frames, index: frameIndex } = currentAnimation
      //const sx: number = frames.map(({ width }) => width).reduce((a: number, b: number, index: number) => (index + 1) > currentFrame ? a + b : a)
      // ??? --> const sy: number = frames.findIndex((_: SpriteAnimationFrame, i: number) => i === frameIndex) * frames.map(({ height }) => height).reduce((a: number, b: number, index: number) => (index + 1) > currentFrame ? a + b : a)
      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
     //ctx.drawImage(sprite as HTMLImageElement, sx)
    //} else {
    ctx.drawImage(sprite as HTMLImageElement, x, y, width, height)
    //}
  }

  public shouldRenderCollision(object: GameObject, color: string = 'lightblue') {
    if (this.showCollisionBoxes && object.collision) {
      const { ctx } = this
      const { collisionType, collisionBox: cb, position: { x, y } } = object as Body2D
      const { width, height, position: cpos } = cb // We will add the collision position vector to the base position vector

      const size: number = Math.max(width, height)
      const radius = size * 0.5
      
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.setLineDash([5, 10])
      ctx.beginPath()  
      
      switch(collisionType) {
        case CollisionType.CIRCULAR:
          ctx.arc(x + cpos.x + width * 0.5, y + cpos.y + height * 0.5, radius, 0, 2 * Math.PI)
          break
        case CollisionType.RECTANGULAR:
        default:
          ctx.rect(x + cpos.x, y + cpos.y, width, height)
      }

      ctx.stroke()
    }
  }

  public render(object: GameObject) {
    const { ctx } = this
    const { width, height, position: { x, y } } = object

    this.shouldRenderCollision(object)

    ctx.fillStyle = '#FFFFFF'
    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.fill()
  }
}

export { Display }