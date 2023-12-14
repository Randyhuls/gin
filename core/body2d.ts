import { GameObject, GameObjectProps } from './game-object'


export type Body2DProps = GameObjectProps & {
  
}

abstract class Body2D extends GameObject {
  constructor(props: Body2DProps) {
    super(props) 
  }

}

export { Body2D }