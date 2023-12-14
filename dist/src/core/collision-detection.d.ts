import { GameObject } from '.';
declare class CollisionDetection {
    static isColliding(a: GameObject, b: GameObject): boolean;
    static isCollidingRect(a: GameObject, b: GameObject): boolean;
    private static isCollidingCircle;
    private static isCollidingCircleWithRect;
    static isInBroadRange(a: GameObject, b: GameObject): boolean;
}
export { CollisionDetection };
