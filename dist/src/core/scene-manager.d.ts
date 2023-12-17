import { Scene } from './scene';
declare class SceneManager {
    private static _shared;
    private queue;
    private activeScene;
    static get shared(): SceneManager;
    addToQueue(scene: Scene): this;
    next(): void;
    previous(): void;
    renderScene(): void;
}
export { SceneManager };
