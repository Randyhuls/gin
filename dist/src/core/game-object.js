import { Process } from './process';
import { Vector2D } from '.';
import { EventType } from '../events/events';
import { CollisionType, Origin } from './types';
class GameObject extends Process {
    constructor({ id, width, height, zIndex, collision, collisionType, collisionBox, origin, position, sprite, spritesheet, currentAnimation }) {
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
        this.width = width || this.width;
        this.height = height || this.height;
        this.zIndex = zIndex || this.zIndex;
        this.origin = origin || this.origin;
        this.position = position || this.position;
        this.sprite = sprite || this.sprite;
        this.spritesheet = spritesheet || this.spritesheet;
        this.currentAnimation = currentAnimation || this.currentAnimation;
        this.collision = collision || this.collision;
        this.collisionType = collisionType === undefined ? this.collisionType : collisionType;
        this.collisionBox = {
            width: (collisionBox === null || collisionBox === void 0 ? void 0 : collisionBox.width) || this._width,
            height: (collisionBox === null || collisionBox === void 0 ? void 0 : collisionBox.height) || this._height,
            position: (collisionBox === null || collisionBox === void 0 ? void 0 : collisionBox.position) || this._collisionBox.position
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