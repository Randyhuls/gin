import { Vector2D } from '../vector2d';
export type OriginType = {
    TOP_LEFT: Vector2D;
    TOP_CENTER: Vector2D;
    TOP_RIGHT: Vector2D;
    BOTTOM_LEFT: Vector2D;
    BOTTOM_MIDDLE: Vector2D;
    BOTTOM_RIGHT: Vector2D;
    CENTER_LEFT: Vector2D;
    CENTER: Vector2D;
    CENTER_RIGHT: Vector2D;
};
declare const Origin: OriginType;
export { Origin };
