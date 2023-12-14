"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSettings = exports.settings = void 0;
exports.settings = {
    collisionSettings: {
        BROAD_SCAN_RANGE: 60
    }
};
const setSettings = (options = {}) => {
    exports.settings = Object.assign(Object.assign({}, exports.settings), options);
};
exports.setSettings = setSettings;
//# sourceMappingURL=settings-manager.js.map