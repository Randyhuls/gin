"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.gin = exports.setIsBooting = exports.isBooting = void 0;
const package_json_1 = require("../package.json");
const _1 = require(".");
const events_1 = require("../events");
const process_1 = require("./process");
const settings_manager_1 = require("./settings-manager");
const { useState } = _1.StateManager;
const [, setWaitBeforeStart] = process_1.Process.interrupted;
_a = useState(false), exports.isBooting = _a[0], exports.setIsBooting = _a[1];
const gin = (options = {}, onReady) => {
    let ts = 0;
    (0, settings_manager_1.setSettings)(options);
    (0, exports.setIsBooting)(true);
    setWaitBeforeStart(true);
    const run = (timestamp = Date.now()) => {
        const delta = (timestamp / 1000) - ts;
        const fps = Math.round(1 / delta);
        ts = timestamp / 1000;
        dispatchEvent((0, events_1.onUpdateEvent)(delta, fps));
        requestAnimationFrame(run.bind(this));
    };
    run();
    (0, exports.setIsBooting)(false);
    setWaitBeforeStart(false);
    console.log(`Running '${package_json_1.name}:v${package_json_1.version}'`);
    onReady === null || onReady === void 0 ? void 0 : onReady();
};
exports.gin = gin;
//# sourceMappingURL=gin.js.map