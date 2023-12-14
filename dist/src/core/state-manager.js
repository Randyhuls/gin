"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
class StateManager {
    static useState(defaultValue) {
        let state = defaultValue || null;
        return [
            () => state,
            (value) => { state = value; }
        ];
    }
}
exports.StateManager = StateManager;
//# sourceMappingURL=state-manager.js.map