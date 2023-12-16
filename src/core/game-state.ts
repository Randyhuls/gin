export type State<T> = [() => T, (value: T) => void]

class GameState<T extends Object> {
  constructor(props?: T) {
    this.props = props || {} as T
  }

  public props: T


  public useState<T>(defaultValue?: T): State<T> {
    let state: T = defaultValue as T
    const getState = (): T => state as T
    const setState = (value: T) => state = value

    return [getState, setState]
  }
}

export { GameState }