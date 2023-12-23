import { Display } from '../io/display';
import { Vector2D } from './vector2d';
class Scene {
    constructor(id, height, width, sceneBodyPositionY) {
        var _a, _b, _c;
        this.canvas = (_a = Display.shared) === null || _a === void 0 ? void 0 : _a.canvas;
        this.objects = [];
        this.id = id;
        this.height = height || ((_b = this.canvas) === null || _b === void 0 ? void 0 : _b.height) || 0;
        this.width = width || ((_c = this.canvas) === null || _c === void 0 ? void 0 : _c.width) || 0;
        this.sceneBodyPositionY = sceneBodyPositionY || 0;
    }
    addObjectToScene(object, position, zIndex) {
        var _a;
        if (zIndex)
            object.zIndex = zIndex;
        object.position = position || object.position || this.CENTER;
        this.objects.push(object);
        (_a = this.onSceneChange) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    get CENTER() {
        return new Vector2D(this.width * 0.5, this.height * 0.5);
    }
    get BOTTOM_LEFT() {
        return new Vector2D(0, this.height);
    }
}
export { Scene };
//# sourceMappingURL=scene.js.map