import { Process } from './process';
import { Scene } from './scene';
declare class SceneManager extends Process {
    private static _shared;
    private queue;
    private activeScene;
    constructor();
    static get shared(): SceneManager;
    addToQueue(scene: Scene): this;
    next(): void;
    previous(): void;
    renderScene(): void;
    protected onUpdate(delta: number, fps: number): void;
}
export { SceneManager };
