class StateManager {
    static useState(defaultValue) {
        let state = defaultValue || null;
        return [
            () => state,
            (value) => { state = value; }
        ];
    }
}
export { StateManager };
//# sourceMappingURL=state-manager.js.map