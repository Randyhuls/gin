"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;
const events_1 = require("../events/events");
const display_1 = require("../io/display");
const collision_detection_1 = require("./collision-detection");
const process_1 = require("./process");
class SceneManager extends process_1.Process {
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
        const display = display_1.Display.shared;
        const { objects } = this.activeScene;
        objects
            .sort(({ zIndex: zA }, { zIndex: zB }) => zA - zB)
            .forEach((object) => {
            if (object.collision) {
                const targets = objects.filter((target) => (target.collision &&
                    target.id !== object.id &&
                    collision_detection_1.CollisionDetection.isInBroadRange(object, target) &&
                    collision_detection_1.CollisionDetection.isColliding(object, target)));
                if (targets.length > 0)
                    dispatchEvent((0, events_1.onCollisionEvent)(object.id, targets));
            }
        });
        display.clearDisplay();
        objects.forEach((object) => object.sprite ? display.renderImage(object) : display.render(object));
    }
    onUpdate(delta, fps) {
        this.renderScene();
    }
}
exports.SceneManager = SceneManager;
//# sourceMappingURL=scene-manager.js.map