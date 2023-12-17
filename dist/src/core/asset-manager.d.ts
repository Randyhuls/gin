import { AssetType } from './types';
declare class AssetManager<T extends string> {
    private static _manager;
    assets: {
        images: {
            [key: string]: HTMLImageElement | SVGElement;
        };
        audio: {
            [key: string]: HTMLAudioElement;
        };
    };
    static get manager(): AssetManager<any>;
    getImageById(id: T): HTMLImageElement | SVGElement | void;
    getAudioById(id: T): HTMLAudioElement;
    preload(id: T, asset: AssetType): Promise<AssetType>;
    preloadMultiple(assets: {
        id: T;
        asset: AssetType;
    }[]): Promise<AssetType[]>;
}
export { AssetManager };
