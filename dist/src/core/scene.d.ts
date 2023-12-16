import { GameObject } from './game-object';
import { Vector2D } from './vector2d';
declare class Scene {
    private canvas;
    width: number;
    height: number;
    id: string;
    sceneBodyPositionY: number;
    objects: GameObject[];
    constructor(id: string, height?: number, width?: number, sceneBodyPositionY?: number);
    addObjectToScene(object: GameObject, position?: Vector2D, zIndex?: number): void;
    get CENTER(): Vector2D;
    get BOTTOM_LEFT(): Vector2D;
}
export { Scene };
