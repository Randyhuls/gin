import { Body2D, GameObject } from '.'
import { CollisionType } from './types'
import Settings from '../settings'

const { BROAD_SCAN_RANGE } = Settings.collisionSettings

class CollisionDetection {
  public static isColliding(a: GameObject, b: GameObject): boolean {
    const { collisionType: cta } = a
    const { collisionType: ctb } = b

    if (cta === CollisionType.RECTANGULAR && cta === ctb) return this.isCollidingRect(a, b)
    if (cta === CollisionType.CIRCULAR && cta === ctb) return this.isCollidingCircle(a, b)
    if (cta !== ctb) return this.isCollidingCircleWithRect(a, b)
    
    return false
  }

  public static isCollidingRect(a: GameObject, b: GameObject): boolean {
    const { collisionBox: { position: cpa, width: aWidth, height: aHeight }, position: pa } = a
    const { collisionBox: { position: cpb, width: bWidth, height: bHeight }, position: pb } = b
  
    const ax = pa.x + cpa.x
    const ay = pa.y + cpa.y
    const bx = pb.x + cpb.x
    const by = pb.y + cpb.y

    return !(bx > aWidth + ax || ax > bWidth + bx || by > aHeight + ay || ay > bHeight + by)
  }

  private static isCollidingCircle(a: GameObject, b: GameObject): boolean {
    const { collisionBox: { position: cpa, width: aWidth, height: aHeight }, position: pa } = a
    const { collisionBox: { position: cpb, width: bWidth, height: bHeight }, position: pb } = b

    const sizeA: number = Math.max(aWidth, aHeight)
    const sizeB: number = Math.max(bWidth, bHeight)

    const x1: number = pa.x + cpa.x + sizeA * 0.5
    const x2: number = pb.x + cpb.x + sizeB * 0.5
    const y1: number = pa.y + cpa.y + sizeA * 0.5
    const y2: number = pb.y + cpb.y + sizeB * 0.5

    const squareDistance: number = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
    
    const radiusA: number = (sizeA * 0.5)
    const radiusB: number = (sizeB * 0.5)

    return squareDistance <= ((radiusA + radiusB) * (radiusA + radiusB))
  }

  private static isCollidingCircleWithRect(a: GameObject, b: GameObject): boolean {
    const rect: Body2D = a.collisionType === CollisionType.RECTANGULAR ? a : b
    const circle: Body2D = a.collisionType === CollisionType.CIRCULAR ? a : b

    const { collisionBox: { width: rWidth, height: rHeight, position: crp }, position: rp } = rect
    const { collisionBox: { width: cWidth, height: cHeight, position: ccp }, position: cp } = circle

    // Position + colission position (offset)
    const cPosX: number = ccp.x + cp.x + (cWidth * 0.5)
    const cPosY: number = ccp.y + cp.y + (cHeight * 0.5)
    const rPosX: number = crp.x + rp.x
    const rPosY: number = crp.y + rp.y

    const circleRadius: number = Math.max(cWidth, cHeight) * 0.5
    const x: number = Math.abs(cPosX - rPosX - (rWidth * 0.5))
    const y: number = Math.abs(cPosY - rPosY - (rHeight * 0.5))

    if (x > ((rWidth * 0.5) + circleRadius)) return false 
    if (y > ((rHeight * 0.5) + circleRadius)) return false 

    if (x <= (rWidth * 0.5)) return true
    if (y <= (rHeight * 0.5)) return true
    
    const dx = x - (rWidth * 0.5)
    const dy = y - (rHeight * 0.5)

    return (dx * dx) + (dy * dy) <= (circleRadius * circleRadius)
  }

  public static isInBroadRange(a: GameObject, b: GameObject): boolean {
    return a.position.distanceTo(b.position) <= (BROAD_SCAN_RANGE as number)
  }
}

export { CollisionDetection }