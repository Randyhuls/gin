"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const core_1 = require("../../core");
const schemas_1 = require("./schemas");
const types_1 = require("./types");
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
            const { code } = event;
            this.keys[code] = true;
        });
        addEventListener('keyup', (event) => {
            const { code } = event;
            this.keys[code] = false;
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
            case types_1.InputType.KEYBOARD: this._schema = schemas_1.KeyboardSchema;
            default: this._schema = schemas_1.KeyboardSchema;
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
        return this.isPressed(this.schema.LEFT) ? core_1.Vector2D.LEFT : this.isPressed(this.schema.RIGHT) ? core_1.Vector2D.RIGHT : core_1.Vector2D.ZERO;
    }
    getDirectionY() {
        return this.isPressed(this.schema.UP) ? core_1.Vector2D.UP : this.isPressed(this.schema.DOWN) ? core_1.Vector2D.DOWN : core_1.Vector2D.ZERO;
    }
}
exports.Input = Input;
//# sourceMappingURL=input.js.map