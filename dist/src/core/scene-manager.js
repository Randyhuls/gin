import { onCollisionEvent } from '../events/events';
import { Display } from '../io/display';
import { CollisionDetection } from './collision-detection';
import { Process } from './process';
class SceneManager extends Process {
    constructor() {
        super();
        this.queue = [];
    }
    static get shared() {
        if (!this._shared)
            this._shared = new SceneManager();
        return this._shared;
    }
    addToQueue(scene) {
        this.queue.push(scene);
        if (!this.activeScene)
            this.activeScene = this.queue[0];
        return this;
    }
    next() {
        const nextIndex = this.queue.findIndex(({ id }) => id === this.activeScene.id) || 0;
        if (nextIndex > this.queue.length - 1)
            throw new Error('Next scene is unavailable');
        this.activeScene = this.queue[nextIndex];
    }
    previous() {
        this.queue.pop();
        const lastIndex = this.queue.length - 1;
        if (lastIndex < 0)
            throw new Error('Previous scene is unavailable');
        this.activeScene = this.queue[lastIndex];
    }
    renderScene() {
        const display = Display.shared;
        const { objects } = this.activeScene || { objects: [] };
        objects
            .sort(({ zIndex: zA }, { zIndex: zB }) => zA - zB)
            .forEach((object) => {
            if (object.collision) {
                const targets = objects.filter((target) => (target.collision &&
                    target.id !== object.id &&
                    CollisionDetection.isInBroadRange(object, target) &&
                    CollisionDetection.isColliding(object, target)));
                if (targets.length > 0)
                    dispatchEvent(onCollisionEvent(object.id, targets));
            }
        });
        display === null || display === void 0 ? void 0 : display.clearDisplay();
        objects.forEach((object) => object.sprite ? display === null || display === void 0 ? void 0 : display.renderImage(object) : display === null || display === void 0 ? void 0 : display.render(object));
    }
    onUpdate(delta, fps) {
        this.renderScene();
    }
}
export { SceneManager };
//# sourceMappingURL=scene-manager.js.map