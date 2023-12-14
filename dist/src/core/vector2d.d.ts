declare class Vector2D {
    x: number;
    y: number;
    constructor(x: number, y: number);
    get length(): number;
    get lengthSquared(): number;
    get normalized(): this;
    add(v: Vector2D): Vector2D;
    angle(): number;
    angleTo(v: Vector2D): number;
    ceil(): Vector2D;
    clamp(min: Vector2D, max: Vector2D): Vector2D;
    cross(v: Vector2D): number;
    distanceTo(v: Vector2D): number;
    distanceSquaredTo(v: Vector2D): number;
    divide(v: Vector2D): Vector2D;
    dot(v: Vector2D): number;
    equals(v: Vector2D): boolean;
    floor(): Vector2D;
    fromAngle(angle: number): Vector2D;
    moveToward(to: Vector2D, delta: number): Vector2D;
    multiply(speed: number): void;
    normalize(): void;
    round(): Vector2D;
    rotated(degrees: number): Vector2D;
    subtract(v: Vector2D): Vector2D;
    static get DOWN(): Vector2D;
    static get LEFT(): Vector2D;
    static get INFINITY(): Vector2D;
    static get RIGHT(): Vector2D;
    static get UP(): Vector2D;
    static get ZERO(): Vector2D;
}
export { Vector2D };
