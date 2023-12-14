class GameState {
    constructor(props) {
        this.props = props || {};
    }
    useState(defaultValue) {
        let state = defaultValue;
        const getState = () => state;
        const setState = (value) => state = value;
        return [getState, setState];
    }
}
export { GameState };
//# sourceMappingURL=game-state.js.map