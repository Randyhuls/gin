import { SpriteAnimationFrame, SpriteAnimationSet } from './types/sprite-animation.type';
import { Animation } from './animation';
type SpritesheetProps = {
    id: string;
    animations: SpriteAnimationSet;
};
declare class Spritesheet {
    private _id;
    private _animations;
    sprite: HTMLImageElement;
    constructor(props?: SpritesheetProps);
    get id(): string;
    get animations(): SpriteAnimationSet;
    static fromRawSpritesheet(path: string): Promise<Spritesheet>;
    getAnimationById(id: string): Animation;
    getAnimationFramesById(id: string): SpriteAnimationFrame[];
    drawAnimationById(id: string): void;
}
export { Spritesheet };
