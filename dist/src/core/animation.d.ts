import { SpriteAnimationFrame, SpriteAnimation } from './types/sprite-animation.type';
type AnimationProps = {
    assetId: string;
    fps: number;
    frames: SpriteAnimationFrame[];
    id: string;
};
declare class Animation {
    assetId: string;
    id: string;
    index: number;
    fps: number;
    frames: SpriteAnimationFrame[];
    constructor(props?: AnimationProps);
    static fromRawSpriteAnimation(assetId: string, id: string, spriteAnimation: SpriteAnimation): Animation;
    nextFrame(): void;
}
export { Animation, AnimationProps };
