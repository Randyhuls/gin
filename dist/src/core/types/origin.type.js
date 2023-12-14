"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Origin = void 0;
const vector2d_1 = require("../vector2d");
const Origin = {
    TOP_LEFT: new vector2d_1.Vector2D(0, 0),
    TOP_CENTER: new vector2d_1.Vector2D(1, 0),
    TOP_RIGHT: new vector2d_1.Vector2D(2, 0),
    BOTTOM_LEFT: new vector2d_1.Vector2D(0, 2),
    BOTTOM_MIDDLE: new vector2d_1.Vector2D(1, 2),
    BOTTOM_RIGHT: new vector2d_1.Vector2D(2, 2),
    CENTER_LEFT: new vector2d_1.Vector2D(0, 1),
    CENTER: new vector2d_1.Vector2D(1, 1),
    CENTER_RIGHT: new vector2d_1.Vector2D(2, 1)
};
exports.Origin = Origin;
//# sourceMappingURL=origin.type.js.map