import { Vector2D } from '../../core';
import { InputType, InputSchema } from './types';
declare class Input {
    private static _shared;
    private _activeInput;
    private _schema;
    private keys;
    isRepeat: boolean;
    static get shared(): Input;
    listen(): void;
    get activeInput(): InputType;
    get schema(): InputSchema;
    set activeInput(type: InputType);
    setDefault(input: InputType): Input;
    isPressed(key: string): boolean;
    getDirectionX(): Vector2D;
    getDirectionY(): Vector2D;
}
export { Input };
