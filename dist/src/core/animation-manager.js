class AnimationManager {
    static get manager() {
        if (!this.manager)
            this._manager = new AnimationManager();
        return this._manager;
    }
    getAnimationsBySpritesheetId(id) {
    }
}
export { AnimationManager };
//# sourceMappingURL=animation-manager.js.map