"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationManager = void 0;
class AnimationManager {
    static get manager() {
        if (!this.manager)
            this._manager = new AnimationManager();
        return this._manager;
    }
    getAnimationsBySpritesheetId(id) {
    }
}
exports.AnimationManager = AnimationManager;
//# sourceMappingURL=animation-manager.js.map