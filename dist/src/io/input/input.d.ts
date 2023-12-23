import { Vector2D } from '../../core';
import { InputSchema } from './types';
declare class Input {
    private static _shared;
    private _schema;
    keys: {
        [key: string | number]: boolean;
    };
    static get shared(): Input;
    listen(): void;
    getSchema<T extends InputSchema>(): T;
    setSchema<T extends InputSchema>(schema: T): Input;
    isPressed(key: string): boolean;
    getDirectionX(): Vector2D;
    getDirectionY(): Vector2D;
    onKeyUpPressed?(event: KeyboardEvent): void;
    onKeyDownPressed?(event: KeyboardEvent): void;
}
export { Input };
