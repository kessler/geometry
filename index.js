class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class Line {
  constructor(pOrig, pDest) {
    this.pOrig = pOrig
    this.pDest = pDest
  }

  isParallelTo(aLine) {
    return aLine.pOrig.y === this.pOrig.y && aLine.pDest.y === this.pDest.y ||
      aLine.pOrig.x === this.pOrig.x && aLine.pDest.x === this.pDest.x
  }

  isDistinctFrom(aLine) {
    return aLine.pOrig.
  }

  intersection(aLine) {
    // do they overlap on the X axis?
    if (aLine.pOrig.y === this.pOrig.y && aLine.pDest.y === this.pDest.y) {
      if (aLine.pOrig.x <= this.pOrig.x && aLine.) {

      }
    }
  }
}

/**
 *  l1 ----
 *  l2 ====
 */
function overlap(l1, l2) {
  if (l1.pOrig.y === l2.pOrig.y && l1.pDest.y === l2.pDest.y) {
    // ---- ====
    if (l1.pDest.x < l2.pOrig.x && l1.pOrig.x < l2.pOrig.x) {
      return
    }

    // ==== ----
    if (l2.pDest.x < l1.pOrig.x && l2.pOrig.x < l1.pOrig.x) {
      return
    }

    const maxX = Math.max(l1.)
  }
}
