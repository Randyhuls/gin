declare class StateManager {
    static useState<T>(defaultValue: T | null): [() => T | null, (value: T | null) => void];
}
export { StateManager };
