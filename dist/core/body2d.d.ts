import { GameObject, GameObjectProps } from './game-object';
export type Body2DProps = GameObjectProps & {};
declare abstract class Body2D extends GameObject {
    constructor(props: Body2DProps);
}
export { Body2D };
