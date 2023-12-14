import { name, version } from '../package.json';
import { StateManager } from '.';
import { onUpdateEvent } from '../events';
import { Process } from './process';
import { setSettings } from './settings-manager';
const useState = StateManager.useState;
const [, setWaitBeforeStart] = Process.interrupted;
export const [isBooting, setIsBooting] = useState(false);
const gin = (options = {}, onReady) => {
    let ts = 0;
    setSettings(options);
    setIsBooting(true);
    setWaitBeforeStart(true);
    const run = (timestamp = Date.now()) => {
        const delta = (timestamp / 1000) - ts;
        const fps = Math.round(1 / delta);
        ts = timestamp / 1000;
        dispatchEvent(onUpdateEvent(delta, fps));
        requestAnimationFrame(run.bind(this));
    };
    run();
    setIsBooting(false);
    setWaitBeforeStart(false);
    console.log(`Running '${name}:v${version}'`);
    onReady === null || onReady === void 0 ? void 0 : onReady();
};
export { gin };
//# sourceMappingURL=gin.js.map