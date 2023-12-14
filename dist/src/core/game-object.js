"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
const process_1 = require("./process");
const _1 = require(".");
const events_1 = require("../events/events");
const types_1 = require("./types");
class GameObject extends process_1.Process {
    constructor({ id, width, height, zIndex, collision, collisionType, collisionBox, origin, sprite, spritesheet, currentAnimation }) {
        var _a, _b, _c;
        super();
        this._width = 0;
        this._height = 0;
        this._position = _1.Vector2D.ZERO;
        this._collisionBox = {
            position: _1.Vector2D.ZERO,
            width: 0,
            height: 0
        };
        this._currentAnimation = null;
        this.frameTicks = 1;
        this.origin = types_1.Origin.TOP_LEFT;
        this.zIndex = 0;
        this.acceleration = 0;
        this.direction = _1.Vector2D.ZERO;
        this.friction = 0;
        this.maxSpeed = 0;
        this.velocity = _1.Vector2D.ZERO;
        this.collision = false;
        this.collisionType = types_1.CollisionType.RECTANGULAR;
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
        addEventListener(events_1.EventType.COLLISION, (event) => {
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
exports.GameObject = GameObject;
//# sourceMappingURL=game-object.js.map