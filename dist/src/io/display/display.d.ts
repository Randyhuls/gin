import { GameObject, Vector2D } from '../../core';
export type DisplayProps = {
    canvas: HTMLCanvasElement;
    screenWidth: number;
    screenHeight: number;
    backgroundColor?: string;
    showCollisionBoxes?: boolean;
};
declare class Display {
    private static _shared;
    private _canvas;
    protected ctx: CanvasRenderingContext2D;
    showCollisionBoxes: boolean;
    get canvas(): HTMLCanvasElement;
    static get shared(): Display | undefined;
    static create(props?: DisplayProps): Display;
    getScreenSizeVector(): Vector2D;
    clearDisplay(): void;
    renderText(text?: string, x?: number, y?: number, fontSize?: number, color?: string): void;
    renderImage(object: GameObject): void;
    shouldRenderCollision(object: GameObject, color?: string): void;
    render(object: GameObject): void;
}
export { Display };
