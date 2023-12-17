import { AssetType } from './types'

class AssetManager<T extends string> {
  private static _manager: AssetManager<any>

  public assets: { images: { [key: string]: HTMLImageElement|SVGElement }, audio: { [key: string]: HTMLAudioElement } } = {
    images: {},
    audio: {}
  }

  public static get manager() {
    if (!this._manager) this._manager = new AssetManager()
    return this._manager
  }

  public getImageById(id: T): HTMLImageElement|SVGElement|void {
    const asset: HTMLImageElement|SVGElement|undefined = this.assets.images[id]
    if (!asset) throw new Error(`No image known by that id: ${id}`)
    return asset
  }

  public getAudioById(id: T): HTMLAudioElement {
    const asset: HTMLAudioElement|undefined = this.assets.audio[id]
    if (!asset) throw new Error(`No audio known by that id: ${id}`)
    return asset
  }

  public preload(id: T, asset: AssetType): Promise<AssetType> {
    return new Promise((resolve, reject) => {
      asset.onload = () => {
        switch (asset.constructor) {
          case HTMLImageElement: 
          case SVGElement: 
            this.assets.images[id] = asset as HTMLImageElement
            break
          case HTMLAudioElement:
            this.assets.audio[id] = asset as HTMLAudioElement
        }
        resolve(asset)
      }
      asset.onerror = reject
    })
  }

  public preloadMultiple(assets: { id: T, asset: AssetType }[]): Promise<AssetType[]> {
    const requests: Promise<AssetType>[] = []
    for (const { id, asset } of assets) requests.push(this.preload.bind(this, id, asset).call())
    return Promise.all(requests)
  }
}

export { AssetManager }