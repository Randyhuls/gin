import { EventType } from '../events/events';
import { StateManager } from './state-manager';
const { useState } = StateManager;
export class Process {
    constructor() {
        this.fps = 0;
        this.pc = 0;
        const [isInterrupted] = Process.interrupted;
        addEventListener(EventType.UPDATE, (event) => {
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
Process.interrupted = useState(false);
//# sourceMappingURL=process.js.map