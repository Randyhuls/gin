"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const display_1 = require("../io/display");
const vector2d_1 = require("./vector2d");
class Scene {
    constructor(id, height, width, sceneBodyPositionY) {
        this.canvas = display_1.Display.shared.canvas;
        this.objects = [];
        this.id = id;
        this.height = height || this.canvas.height;
        this.width = width || this.canvas.width;
        this.sceneBodyPositionY = sceneBodyPositionY || 0;
    }
    addObjectToScene(object, position, zIndex) {
        if (zIndex)
            object.zIndex = zIndex;
        object.position = position || this.CENTER;
        this.objects.push(object);
    }
    get CENTER() {
        return new vector2d_1.Vector2D(this.width * 0.5, this.height * 0.5);
    }
    get BOTTOM_LEFT() {
        return new vector2d_1.Vector2D(0, this.height);
    }
}
exports.Scene = Scene;
//# sourceMappingURL=scene.js.map