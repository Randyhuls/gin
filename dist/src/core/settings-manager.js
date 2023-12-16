export let settings = {
    collisionSettings: {
        BROAD_SCAN_RANGE: 60
    }
};
export const setSettings = (options = {}) => {
    settings = Object.assign(Object.assign({}, settings), options);
};
//# sourceMappingURL=settings-manager.js.map