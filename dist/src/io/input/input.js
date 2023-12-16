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
            var _a, _b;
            const { code } = event;
            if (!this.onKeyDownPressed)
                this.keys[code] = true;
            (_b = (_a = this.onKeyDownPressed) === null || _a === void 0 ? void 0 : _a.bind(this, event)) === null || _b === void 0 ? void 0 : _b.call();
        });
        addEventListener('keyup', (event) => {
            var _a, _b;
            const { code } = event;
            if (!this.onKeyUpPressed)
                this.keys[code] = false;
            (_b = (_a = this.onKeyUpPressed) === null || _a === void 0 ? void 0 : _a.bind(this, event)) === null || _b === void 0 ? void 0 : _b.call();
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