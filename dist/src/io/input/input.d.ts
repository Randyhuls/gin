import { Vector2D } from '../../core';
import { InputType, InputSchema } from './types';
declare class Input {
    private static _shared;
    private _activeInput;
    private _schema;
    keys: {
        [key: string | number]: boolean;
    };
    static get shared(): Input;
    listen(): void;
    get activeInput(): InputType;
    isPressed(key: string): boolean;
    getDirectionX(): Vector2D;
    getDirectionY(): Vector2D;
    getSchema<T extends InputSchema>(): T;
    setSchema<T extends InputSchema>(schema: T): void;
    onKeyUpPressed?(event: KeyboardEvent): void;
    onKeyDownPressed?(event: KeyboardEvent): void;
}
export { Input };
