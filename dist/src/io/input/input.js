import { Vector2D } from '../../core';
import { KeyboardSchema } from './schemas';
import { InputType } from './types';
class Input {
    constructor() {
        this.keys = {};
    }
    static get shared() {
        if (!this._shared)
            this._shared = new Input();
        return this._shared;
    }
    listen() {
        addEventListener('keydown', (event) => {
            var _a;
            const { code } = event;
            this.keys[code] = true;
            (_a = this.onKeyDownPressed) === null || _a === void 0 ? void 0 : _a.bind(event).call();
        });
        addEventListener('keyup', (event) => {
            var _a;
            const { code } = event;
            this.keys[code] = false;
            (_a = this.onKeyUpPressed) === null || _a === void 0 ? void 0 : _a.bind(event).call();
        });
    }
    get activeInput() {
        return this._activeInput;
    }
    get schema() {
        return this._schema;
    }
    set activeInput(type) {
        switch (type) {
            case InputType.KEYBOARD: this._schema = KeyboardSchema;
            default: this._schema = KeyboardSchema;
        }
        this._activeInput = type;
    }
    setDefault(input) {
        this.activeInput = input;
        return Input.shared;
    }
    isPressed(key) {
        return !!this.keys[key];
    }
    getDirectionX() {
        return this.isPressed(this.schema.LEFT) ? Vector2D.LEFT : this.isPressed(this.schema.RIGHT) ? Vector2D.RIGHT : Vector2D.ZERO;
    }
    getDirectionY() {
        return this.isPressed(this.schema.UP) ? Vector2D.UP : this.isPressed(this.schema.DOWN) ? Vector2D.DOWN : Vector2D.ZERO;
    }
}
export { Input };
//# sourceMappingURL=input.js.map