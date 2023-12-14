"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetManager = void 0;
class AssetManager {
    constructor() {
        this.assets = {
            images: {},
            audio: {}
        };
    }
    static get manager() {
        if (!this._manager)
            this._manager = new AssetManager();
        return this._manager;
    }
    getImageById(id) {
        const asset = this.assets.images[id];
        if (!asset)
            throw new Error(`No image known by that id: ${id}`);
        return asset;
    }
    getAudioById(id) {
        const asset = this.assets.audio[id];
        if (!asset)
            throw new Error(`No audio known by that id: ${id}`);
        return asset;
    }
    preload(id, asset) {
        return new Promise((resolve, reject) => {
            asset.onload = () => {
                switch (asset.constructor) {
                    case HTMLImageElement:
                    case SVGElement:
                        this.assets.images[id] = asset;
                        break;
                    case HTMLAudioElement:
                        this.assets.audio[id] = asset;
                }
                resolve(asset);
            };
            asset.onerror = reject;
        });
    }
    preloadMultiple(assets) {
        const requests = [];
        for (const { id, asset } of assets)
            requests.push(this.preload.bind(this, id, asset).call());
        return Promise.all(requests);
    }
}
exports.AssetManager = AssetManager;
//# sourceMappingURL=asset-manager.js.map