"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = void 0;
class Animation {
    constructor(props) {
        this.assetId = '';
        this.id = '';
        this.index = 0;
        this.fps = 0;
        if (!props)
            return;
        const { assetId, fps, frames, id } = props;
        this.assetId = assetId || '';
        this.id = id || '';
        this.fps = fps || 0;
        this.fps = fps || 0;
        this.frames = frames || [];
    }
    static fromRawSpriteAnimation(assetId, id, spriteAnimation) {
        const { fps, frames } = spriteAnimation;
        return new Animation({
            assetId,
            fps,
            frames,
            id
        });
    }
    nextFrame() {
        this.index = this.index < this.frames.length ? +1 : 0;
    }
}
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map