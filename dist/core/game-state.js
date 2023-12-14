"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
class GameState {
    constructor(props) {
        this.props = props || {};
    }
    useState(defaultValue) {
        let state = defaultValue;
        const getState = () => state;
        const setState = (value) => state = value;
        return [getState, setState];
    }
}
exports.GameState = GameState;
//# sourceMappingURL=game-state.js.map