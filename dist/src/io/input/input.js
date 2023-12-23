import { Vector2D } from '../../core';
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
    getSchema() {
        return this._schema;
    }
    setSchema(schema) {
        this._schema = schema;
    }
    isPressed(key) {
        return !!this.keys[key];
    }
    getDirectionX() {
        return this.isPressed(this._schema.LEFT) ? Vector2D.LEFT : this.isPressed(this._schema.RIGHT) ? Vector2D.RIGHT : Vector2D.ZERO;
    }
    getDirectionY() {
        return this.isPressed(this._schema.UP) ? Vector2D.UP : this.isPressed(this._schema.DOWN) ? Vector2D.DOWN : Vector2D.ZERO;
    }
}
export { Input };
//# sourceMappingURL=input.js.map