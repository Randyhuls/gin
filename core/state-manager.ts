class StateManager {
  public static useState<T>(defaultValue: T | null): [() => T | null, (value: T | null) => void] {
    let state: T | null = defaultValue || null
    return [
      () => state,
      (value: T | null) => { state = value }
    ]
  }
}

export { StateManager }