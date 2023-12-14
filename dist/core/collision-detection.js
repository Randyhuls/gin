"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionDetection = void 0;
const settings_manager_1 = require("./settings-manager");
const types_1 = require("./types");
const { collisionSettings: { BROAD_SCAN_RANGE } } = settings_manager_1.settings;
class CollisionDetection {
    static isColliding(a, b) {
        const { collisionType: cta } = a;
        const { collisionType: ctb } = b;
        if (cta === types_1.CollisionType.RECTANGULAR && cta === ctb)
            return this.isCollidingRect(a, b);
        if (cta === types_1.CollisionType.CIRCULAR && cta === ctb)
            return this.isCollidingCircle(a, b);
        if (cta !== ctb)
            return this.isCollidingCircleWithRect(a, b);
        return false;
    }
    static isCollidingRect(a, b) {
        const { collisionBox: { position: cpa, width: aWidth, height: aHeight }, position: pa } = a;
        const { collisionBox: { position: cpb, width: bWidth, height: bHeight }, position: pb } = b;
        const ax = pa.x + cpa.x;
        const ay = pa.y + cpa.y;
        const bx = pb.x + cpb.x;
        const by = pb.y + cpb.y;
        return !(bx > aWidth + ax || ax > bWidth + bx || by > aHeight + ay || ay > bHeight + by);
    }
    static isCollidingCircle(a, b) {
        const { collisionBox: { position: cpa, width: aWidth, height: aHeight }, position: pa } = a;
        const { collisionBox: { position: cpb, width: bWidth, height: bHeight }, position: pb } = b;
        const sizeA = Math.max(aWidth, aHeight);
        const sizeB = Math.max(bWidth, bHeight);
        const x1 = pa.x + cpa.x + sizeA * 0.5;
        const x2 = pb.x + cpb.x + sizeB * 0.5;
        const y1 = pa.y + cpa.y + sizeA * 0.5;
        const y2 = pb.y + cpb.y + sizeB * 0.5;
        const squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        const radiusA = (sizeA * 0.5);
        const radiusB = (sizeB * 0.5);
        return squareDistance <= ((radiusA + radiusB) * (radiusA + radiusB));
    }
    static isCollidingCircleWithRect(a, b) {
        const rect = a.collisionType === types_1.CollisionType.RECTANGULAR ? a : b;
        const circle = a.collisionType === types_1.CollisionType.CIRCULAR ? a : b;
        const { collisionBox: { width: rWidth, height: rHeight, position: crp }, position: rp } = rect;
        const { collisionBox: { width: cWidth, height: cHeight, position: ccp }, position: cp } = circle;
        const cPosX = ccp.x + cp.x + (cWidth * 0.5);
        const cPosY = ccp.y + cp.y + (cHeight * 0.5);
        const rPosX = crp.x + rp.x;
        const rPosY = crp.y + rp.y;
        const circleRadius = Math.max(cWidth, cHeight) * 0.5;
        const x = Math.abs(cPosX - rPosX - (rWidth * 0.5));
        const y = Math.abs(cPosY - rPosY - (rHeight * 0.5));
        if (x > ((rWidth * 0.5) + circleRadius))
            return false;
        if (y > ((rHeight * 0.5) + circleRadius))
            return false;
        if (x <= (rWidth * 0.5))
            return true;
        if (y <= (rHeight * 0.5))
            return true;
        const dx = x - (rWidth * 0.5);
        const dy = y - (rHeight * 0.5);
        return (dx * dx) + (dy * dy) <= (circleRadius * circleRadius);
    }
    static isInBroadRange(a, b) {
        return a.position.distanceTo(b.position) <= BROAD_SCAN_RANGE;
    }
}
exports.CollisionDetection = CollisionDetection;
//# sourceMappingURL=collision-detection.js.map