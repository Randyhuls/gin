import { AssetType } from './types';
declare class AssetManager {
    private static _manager;
    assets: {
        images: {
            [key: string]: HTMLImageElement | SVGElement;
        };
        audio: {
            [key: string]: HTMLAudioElement;
        };
    };
    static get manager(): AssetManager;
    getImageById(id: string): HTMLImageElement | SVGElement | void;
    getAudioById(id: string): HTMLAudioElement;
    preload(id: string, asset: AssetType): Promise<AssetType>;
    preloadMultiple(assets: {
        id: string;
        asset: AssetType;
    }[]): Promise<AssetType[]>;
}
export { AssetManager };
