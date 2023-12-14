"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const events_1 = require("../events/events");
const _1 = require(".");
const { useState } = _1.StateManager;
class Process {
    constructor() {
        this.fps = 0;
        this.pc = 0;
        const [isInterrupted] = Process.interrupted;
        addEventListener(events_1.EventType.UPDATE, (event) => {
            var _a;
            const { detail } = event;
            !isInterrupted() && (this.fps = (detail === null || detail === void 0 ? void 0 : detail.fps) || 0,
                this.pc++,
                (_a = this.onUpdate) === null || _a === void 0 ? void 0 : _a.bind(this, (detail === null || detail === void 0 ? void 0 : detail.delta) || 0, (detail === null || detail === void 0 ? void 0 : detail.fps) || 0).call());
        });
    }
    throttle(fps, onUpdate) {
        this.pc % (this.fps - fps) === 0 && onUpdate();
    }
}
exports.Process = Process;
Process.interrupted = useState(false);
//# sourceMappingURL=process.js.map