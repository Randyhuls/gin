import { Process } from './process';
import { Vector2D } from '.';
import { EventType } from '../events/events';
import { CollisionType, Origin } from './types';
class GameObject extends Process {
    constructor({ id, width, height, zIndex, collision, collisionType, collisionBox, origin, sprite, spritesheet, currentAnimation }) {
        var _a, _b, _c;
        super();
        this._width = 0;
        this._height = 0;
        this._position = Vector2D.ZERO;
        this._collisionBox = {
            position: Vector2D.ZERO,
            width: 0,
            height: 0
        };
        this._currentAnimation = null;
        this.frameTicks = 1;
        this.origin = Origin.TOP_LEFT;
        this.zIndex = 0;
        this.acceleration = 0;
        this.direction = Vector2D.ZERO;
        this.friction = 0;
        this.maxSpeed = 0;
        this.velocity = Vector2D.ZERO;
        this.collision = false;
        this.collisionType = CollisionType.RECTANGULAR;
        this.sprite = null;
        this.spritesheet = null;
        this.currentFrame = 1;
        this.id = id;
        this.width = width !== null && width !== void 0 ? width : this.width;
        this.height = height !== null && height !== void 0 ? height : this.height;
        this.zIndex = zIndex !== null && zIndex !== void 0 ? zIndex : this.zIndex;
        this.origin = origin !== null && origin !== void 0 ? origin : this.origin;
        this.sprite = sprite !== null && sprite !== void 0 ? sprite : this.sprite;
        this.spritesheet = spritesheet !== null && spritesheet !== void 0 ? spritesheet : this.spritesheet;
        this.currentAnimation = currentAnimation !== null && currentAnimation !== void 0 ? currentAnimation : this.currentAnimation;
        this.collision = collision !== null && collision !== void 0 ? collision : this.collision;
        this.collisionType = collisionType === undefined ? this.collisionType : collisionType;
        this.collisionBox = {
            width: (_a = collisionBox === null || collisionBox === void 0 ? void 0 : collisionBox.width) !== null && _a !== void 0 ? _a : this._width,
            height: (_b = collisionBox === null || collisionBox === void 0 ? void 0 : collisionBox.height) !== null && _b !== void 0 ? _b : this._height,
            position: (_c = collisionBox === null || collisionBox === void 0 ? void 0 : collisionBox.position) !== null && _c !== void 0 ? _c : this._collisionBox.position
        };
        addEventListener(EventType.COLLISION, (event) => {
            const { detail } = event;
            if (this.collision && (detail === null || detail === void 0 ? void 0 : detail.sourceId) === this.id)
                this.onCollision && this.onCollision.bind(this, detail.sourceId, detail.targets || []).call();
        });
    }
    get currentAnimation() {
        return this._currentAnimation;
    }
    set currentAnimation(value) {
        this._currentAnimation = value;
        this.frameTicks = 0;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get collisionBox() {
        return this._collisionBox;
    }
    set collisionBox({ position, width, height }) {
        this._collisionBox.position = position;
        this._collisionBox.height = height;
        this._collisionBox.width = width;
    }
}
export { GameObject };
//# sourceMappingURL=game-object.js.map