import { SettingsType } from './types';
export declare const isBooting: () => boolean | null, setIsBooting: (value: boolean | null) => void;
declare const gin: (options?: SettingsType, onReady?: () => void) => void;
export { gin };
