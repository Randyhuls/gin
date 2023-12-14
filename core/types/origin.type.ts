import { Vector2D } from '../vector2d'

export type OriginType = {
  TOP_LEFT: Vector2D
  TOP_CENTER: Vector2D
  TOP_RIGHT: Vector2D
  BOTTOM_LEFT: Vector2D
  BOTTOM_MIDDLE: Vector2D
  BOTTOM_RIGHT: Vector2D
  CENTER_LEFT: Vector2D
  CENTER: Vector2D
  CENTER_RIGHT: Vector2D
}

const Origin: OriginType = {
  TOP_LEFT:       new Vector2D(0, 0),
  TOP_CENTER:     new Vector2D(1, 0),
  TOP_RIGHT:      new Vector2D(2, 0),
  BOTTOM_LEFT:    new Vector2D(0, 2),
  BOTTOM_MIDDLE:  new Vector2D(1, 2),
  BOTTOM_RIGHT:   new Vector2D(2, 2),
  CENTER_LEFT:    new Vector2D(0, 1),
  CENTER:         new Vector2D(1, 1),
  CENTER_RIGHT:   new Vector2D(2, 1)
}

export { Origin }