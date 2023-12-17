import { Vector2D } from '../../core';
import { CollisionType } from '../../core/types';
class Display {
    get canvas() {
        return this._canvas;
    }
    static get shared() {
        if (!this._shared) {
            console.warn('The shared property cannot be accessed until .create() has been called');
            return;
        }
        return this._shared;
    }
    static create(props) {
        var _a, _b;
        if (!props && !((_a = this._shared) === null || _a === void 0 ? void 0 : _a.canvas))
            throw new Error('Display requires DisplayProps if it has not been instantiated before');
        if ((_b = this._shared) === null || _b === void 0 ? void 0 : _b.canvas)
            throw new Error('The Display has already been initiated');
        if (this._shared)
            return this._shared;
        const display = this._shared = new Display();
        const { canvas, screenWidth, screenHeight, backgroundColor, showCollisionBoxes } = props;
        display._canvas = canvas;
        display.ctx = this._shared.canvas.getContext('2d');
        display.canvas.width = screenWidth;
        display.canvas.height = screenHeight;
        display.canvas.style.backgroundColor = backgroundColor || '#000000';
        display.showCollisionBoxes = !!showCollisionBoxes;
        return display;
    }
    getScreenSizeVector() {
        return new Vector2D(this.canvas.width, this.canvas.height);
    }
    clearDisplay() {
        const { canvas: { width, height }, ctx } = this;
        ctx.clearRect(0, 0, width, height);
    }
    renderText(text = 'abc', x = 0, y = 0, fontSize = 16, color = '#FFFFFF') {
        const { ctx } = this;
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillText(text, x, y);
    }
    renderImage(object) {
        const { ctx } = this;
        const { width, height, position: { x, y }, currentAnimation, sprite, currentFrame, spritesheet } = object;
        this.shouldRenderCollision(object);
        ctx.drawImage(sprite, x, y, width, height);
    }
    shouldRenderCollision(object, color = 'lightblue') {
        if (this.showCollisionBoxes && object.collision) {
            const { ctx } = this;
            const { collisionType, collisionBox: cb, position: { x, y } } = object;
            const { width, height, position: cpos } = cb;
            const size = Math.max(width, height);
            const radius = size * 0.5;
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 10]);
            ctx.beginPath();
            switch (collisionType) {
                case CollisionType.CIRCULAR:
                    ctx.arc(x + cpos.x + width * 0.5, y + cpos.y + height * 0.5, radius, 0, 2 * Math.PI);
                    break;
                case CollisionType.RECTANGULAR:
                default:
                    ctx.rect(x + cpos.x, y + cpos.y, width, height);
            }
            ctx.stroke();
        }
    }
    render(object) {
        const { ctx } = this;
        const { width, height, position: { x, y } } = object;
        this.shouldRenderCollision(object);
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fill();
    }
}
export { Display };
//# sourceMappingURL=display.js.map