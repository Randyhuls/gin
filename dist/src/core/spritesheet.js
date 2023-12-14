"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spritesheet = void 0;
const asset_manager_1 = require("./asset-manager");
const animation_1 = require("./animation");
const utils_1 = require("./utils");
class Spritesheet {
    constructor(props) {
        this._animations = {};
        if (!props)
            return;
        const { id, animations } = props;
        this._id = id;
        this._animations = animations;
    }
    get id() {
        return this._id;
    }
    get animations() {
        return this._animations;
    }
    static fromRawSpritesheet(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const { assetId, animations } = yield (0, utils_1.importFile)(path);
            const spritesheet = new Spritesheet();
            spritesheet._id = assetId;
            spritesheet._animations = animations;
            spritesheet.sprite = asset_manager_1.AssetManager.manager.getImageById(assetId);
            return spritesheet;
        });
    }
    getAnimationById(id) {
        const rawAnimation = this.animations[id];
        if (!rawAnimation)
            throw new Error(`No animation found with id: ${id}`);
        return new animation_1.Animation({ assetId: this.id, id, fps: rawAnimation.fps, frames: rawAnimation.frames });
    }
    getAnimationFramesById(id) {
        var _a;
        const frames = (_a = this.animations[id]) === null || _a === void 0 ? void 0 : _a.frames;
        if (!frames || frames.length === 0)
            throw new Error(`No animation frames found for id: ${id}`);
        return frames;
    }
    drawAnimationById(id) {
    }
}
exports.Spritesheet = Spritesheet;
//# sourceMappingURL=spritesheet.js.map