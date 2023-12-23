import { GameObject } from './game-object';
import { Vector2D } from './vector2d';
declare class Scene {
    private canvas;
    width: number;
    height: number;
    id: string;
    sceneBodyPositionY: number;
    objects: {
        [key: string]: GameObject;
    };
    constructor(id: string, height?: number, width?: number, sceneBodyPositionY?: number);
    addObjectToScene(object: GameObject, position?: Vector2D, zIndex?: number): void;
    getObjectById(id: string): GameObject | undefined;
    setObjectById(id: string, object: GameObject): void;
    get CENTER(): Vector2D;
    get BOTTOM_LEFT(): Vector2D;
    onSceneChange?(): void;
}
export { Scene };
