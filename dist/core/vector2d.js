"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2D = void 0;
const utils_1 = require("./utils");
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }
    get normalized() {
        this.normalize();
        return this;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
    angleTo(v) {
        return Math.atan2(this.cross(v), this.dot(v));
    }
    ceil() {
        return new Vector2D(Math.ceil(this.x), Math.ceil(this.y));
    }
    clamp(min, max) {
        return new Vector2D(Math.min(Math.max(this.x, min.y), max.x), Math.min(Math.max(this.y, min.y), max.y));
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    distanceTo(v) {
        return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
    }
    distanceSquaredTo(v) {
        return (this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y);
    }
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    equals(v) {
        return this.x === v.x && this.y === v.y;
    }
    floor() {
        return new Vector2D(Math.floor(this.x), Math.floor(this.y));
    }
    fromAngle(angle) {
        return new Vector2D(Math.cos(angle), Math.sin(angle));
    }
    moveToward(to, delta) {
        const EPSILON = 0.0001;
        const v = this;
        const vd = to.subtract(this);
        const vda = v.add(vd);
        return vd.length <= delta || vd.length < EPSILON ? to : new Vector2D(vda.x / vd.length * delta, vda.y / vd.length * delta);
    }
    multiply(speed) {
        this.x *= speed;
        this.y *= speed;
    }
    normalize() {
        if (this.length !== 0) {
            this.x /= this.length;
            this.y /= this.length;
        }
    }
    round() {
        return new Vector2D((0, utils_1.roundTwoDecimal)(this.x), (0, utils_1.roundTwoDecimal)(this.y));
    }
    rotated(degrees) {
        const sin = Math.sin(degrees);
        const cos = Math.cos(degrees);
        return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    static get DOWN() {
        return new Vector2D(0, 1);
    }
    static get LEFT() {
        return new Vector2D(-1, 0);
    }
    static get INFINITY() {
        return new Vector2D(Infinity, Infinity);
    }
    static get RIGHT() {
        return new Vector2D(1, 0);
    }
    static get UP() {
        return new Vector2D(0, -1);
    }
    static get ZERO() {
        return new Vector2D(0, 0);
    }
}
exports.Vector2D = Vector2D;
//# sourceMappingURL=vector2d.js.map