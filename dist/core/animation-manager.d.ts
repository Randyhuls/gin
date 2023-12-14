declare class AnimationManager {
    private static _manager;
    static get manager(): AnimationManager;
    getAnimationsBySpritesheetId(id: string): void;
}
export { AnimationManager };
