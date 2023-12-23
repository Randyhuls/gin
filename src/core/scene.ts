import { Display } from '../io/display'
import { GameObject } from './game-object'
import { SceneManager } from './scene-manager'
import { Vector2D } from './vector2d'

class Scene {
  private canvas: HTMLCanvasElement | undefined = Display.shared?.canvas

  //Scroll width and height
  public width: number
  public height: number
  
  public id: string // Unique identifier
  public sceneBodyPositionY: number // The scene's defauly Y position for the player, enemies and other bodies

  public objects: GameObject[] = []

  constructor(id: string, height?: number, width?: number, sceneBodyPositionY?: number) {
    this.id = id
    this.height = height || this.canvas?.height || 0
    this.width = width || this.canvas?.width || 0
    this.sceneBodyPositionY = sceneBodyPositionY || 0
  }

  public addObjectToScene(object: GameObject, position?: Vector2D, zIndex?: number) {
    if (zIndex) object.zIndex = zIndex
    object.position = position || object.position || this.CENTER
    this.objects.push(object)

    // Call change hook
    this.onSceneChange?.()
  }

  // Static methods
  get CENTER(): Vector2D {
    return new Vector2D(this.width * 0.5, this.height * 0.5)
  }

  get BOTTOM_LEFT(): Vector2D {
    return new Vector2D(0, this.height)
  }

  public onSceneChange?(): void
}

export { Scene }