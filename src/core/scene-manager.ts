import { onCollisionEvent } from '../events/events'
import { Display } from '../io/display'
import { CollisionDetection } from './collision-detection'
import { GameObject } from './game-object'
import { Process } from './process'
import { Scene } from './scene'

class SceneManager extends Process {
  private static _shared: SceneManager
  
  private queue: Scene[] = []
  private activeScene: Scene

  constructor() {
    super()
  }

  public static get shared(): SceneManager {
    if (!this._shared) this._shared = new SceneManager()
    return this._shared
  }

  public addToQueue(scene: Scene) {
    this.queue.push(scene)
    if (!this.activeScene) this.activeScene = this.queue[0] as Scene
    return this
  }

  public next() {
    const nextIndex: number = this.queue.findIndex(({ id }) => id === this.activeScene.id) || 0
    if (nextIndex > this.queue.length - 1) throw new Error('Next scene is unavailable')
    this.activeScene = this.queue[nextIndex] as Scene
  }

  public previous() {
    this.queue.pop()

    const lastIndex: number = this.queue.length - 1
    if (lastIndex < 0) throw new Error('Previous scene is unavailable')
    this.activeScene = this.queue[lastIndex] as Scene
  }

  public renderScene(): void {
    const display = Display.shared
    const { objects } = this.activeScene || { objects: []}

    objects
    // Sort objects by zIndex
    .sort(({ zIndex: zA }, { zIndex: zB }) => zA - zB) 
    // Perform actions for each object in the scene
    .forEach((object: GameObject) => {
      // Check if object is colliding with any other objects
      if (object.collision) {
        const targets: GameObject[] = objects.filter((target: GameObject) => (
          target.collision && // Target's collision is active 
          target.id !== object.id && // Target is not the same as object
          CollisionDetection.isInBroadRange(object, target) && // Only allow targets that are in the range of object
          CollisionDetection.isColliding(object, target)) // Collision has been detected
        )
        if (targets.length > 0) dispatchEvent(onCollisionEvent(object.id, targets))        
      } 
    })

    // Clear the stage
    display?.clearDisplay()

    // Render object on the screen; note, we do a second for loop rather than adding this call inside the above for loop
    // because it is important that all objects are updated before we call render
    objects.forEach((object: GameObject) => object.sprite ? display?.renderImage(object) : display?.render(object))
  }

  protected onUpdate(delta: number, fps: number): void {
    this.renderScene()
  }
}

export { SceneManager }