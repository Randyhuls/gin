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
    get schema(): InputSchema;
    isPressed(key: string): boolean;
    getDirectionX(): Vector2D;
    getDirectionY(): Vector2D;
    setSchema(schema: InputSchema & {
        [key: string]: string;
    }): void;
    onKeyUpPressed?(event: KeyboardEvent): void;
    onKeyDownPressed?(event: KeyboardEvent): void;
}
export { Input };
