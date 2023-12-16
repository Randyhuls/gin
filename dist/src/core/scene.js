import { Display } from '../io/display';
import { Vector2D } from './vector2d';
class Scene {
    constructor(id, height, width, sceneBodyPositionY) {
        this.canvas = Display.shared.canvas;
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
        return new Vector2D(this.width * 0.5, this.height * 0.5);
    }
    get BOTTOM_LEFT() {
        return new Vector2D(0, this.height);
    }
}
export { Scene };
//# sourceMappingURL=scene.js.map