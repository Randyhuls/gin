import { roundTwoDecimal } from './utils'

class Vector2D {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  get lengthSquared() {
    return this.x * this.x + this.y * this.y
  }

  get normalized() {
    this.normalize()
    return this
  }

  public add(v: Vector2D): Vector2D {
    this.x += v.x
    this.y += v.y
    return this
  }

  public angle(): number {
    return Math.atan2(this.y, this.x)
  }

  public angleTo(v: Vector2D): number {
    return Math.atan2(this.cross(v), this.dot(v))
  }

  public ceil() {
    return new Vector2D(Math.ceil(this.x), Math.ceil(this.y))
  }

  public clamp(min: Vector2D, max: Vector2D): Vector2D {
    return new Vector2D(
      Math.min(Math.max(this.x, min.y), max.x),
      Math.min(Math.max(this.y, min.y), max.y)
    )
  }

  public cross(v: Vector2D): number {
    return this.x * v.y - this.y * v.x
  }

  public distanceTo(v: Vector2D): number {
    return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y))
  }

  public distanceSquaredTo(v: Vector2D): number {
    return (this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y)
  }

  public divide(v: Vector2D): Vector2D {
    this.x /= v.x
    this.y /= v.y
    return this
  }

  public dot(v: Vector2D): number {
    return this.x * v.x + this.y * v.y
  }

  public floor() {
    return new Vector2D(Math.floor(this.x), Math.floor(this.y))
  }

  public fromAngle(angle: number): Vector2D {
    return new Vector2D(Math.cos(angle), Math.sin(angle))
  }

  public moveToward(to: Vector2D, delta: number): Vector2D {
    const EPSILON: number = 0.0001
    const v: Vector2D = this
    const vd: Vector2D = to.subtract(this)
    const vda: Vector2D = v.add(vd)
    return vd.length <= delta || vd.length < EPSILON ? to : new Vector2D(vda.x / vd.length * delta, vda.y / vd.length * delta)
  }

  public multiply(speed: number): void {
    this.x *= speed 
    this.y *= speed 
  }

  public normalize(): void {
    if (this.length !== 0) {
      this.x /= this.length
      this.y /= this.length
    }
  }

  public round() {
    return new Vector2D(roundTwoDecimal(this.x), roundTwoDecimal(this.y))
  }

  public rotated(degrees: number): Vector2D {
    const sin = Math.sin(degrees)
    const cos = Math.cos(degrees)
    return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos)
  }

  public subtract(v: Vector2D): Vector2D {
    this.x -= v.x
    this.y -= v.y
    return this
  }

  // Static getters
  static get DOWN() {
    return new Vector2D(0, 1)
  }

  static get LEFT() {
    return new Vector2D(-1, 0)
  }

  static get INFINITY() {
    return new Vector2D(Infinity, Infinity)
  }

  static get RIGHT() {
    return new Vector2D(1, 0)
  }

  static get UP() {
    return new Vector2D(0, -1)
  }

  // Same as instantiating an empty Vector2D
  static get ZERO() {
    return new Vector2D(0, 0)
  }
}

export { Vector2D }