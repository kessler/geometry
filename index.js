class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  equals(aPoint) {
    return aPoint.x === this.x && aPoint.y === this.y
  }
}

class Rectangle {
  constructor(pOrig, pDest) {
    // normalize
    if (pOrig.x > pDest.x || pOrig.y > pDest.y) {
      const temp = pDest
      pDest = pOrig
      pOrig = temp
    }

    this.pOrig = pOrig
    this.pDest = pDest
  }

  toArray() {
    return [this.pOrig.x, this.pOrig.y, this.pDest.x, this.pDest.y]
  }

  intersectionWith(rect) {
    const x1 = Math.max(this.pOrig.x, rect.pOrig.x)
    const y1 = Math.max(this.pOrig.y, rect.pOrig.y)

    const x2 = Math.min(this.pDest.x, rect.pDest.x)
    const y2 = Math.min(this.pDest.y, rect.pDest.y)

    //console.log({ x1, x2, y1, y2}, x1 > x2 || y1 > y2)
    if (x1 > x2 || y1 > y2) return

    return new Rectangle(new Point(x1, y1), new Point(x2, y2))
  }

  static from(x, y) {
    const p1 = new Point(x, y)
    return {
      to: (x1, y1) => {
        return new Rectangle(p1, new Point(x1, y1))
      }
    }
  }
}

// class Line {
//   constructor(pOrig, pDest) {
//     this.pOrig = pOrig
//     this.pDest = pDest
//   }

//   get mSlope() {
//     return (this.pDest.y - this.pOrig.y) / (this.pDest.x - this.pOrig.x)
//   }

//   // isParallelTo(aLine) {
//   //   return this.sameYAxis(aLine) || this.sameXAxis(aLine)
//   // }

//   sameYAxis(aLine) {
//     return this.pOrig.y === aLine.pOrig.y && this.pDest.y === aLine.pDest.y
//   }

//   sameXAxis(aLine) {
//     return this.pOrig.x === aLine.pOrig.x && this.pDest.x === aLine.pDest.x
//   }


//   intersection(aLine) {
//     // do they overlap on the X axis?
//     if (aLine.pOrig.y === this.pOrig.y && aLine.pDest.y === this.pDest.y) {
//       // if (aLine.pOrig.x <= this.pOrig.x && aLine.) {

//       // }
//     }
//   }

//   toArray() {
//     return [this.pOrig.x, this.pOrig.y, this.pDest.x, this.pDest.y]
//   }

//   equals(aLine) {
//     return aLine.pOrig.equals(this.pOrig) && aLine.pDest.equals(this.pDest)
//   }

//   static from(x, y) {
//     const p1 = new Point(x, y)
//     return {
//       to: (x1, y1) => {
//         return new Line(p1, new Point(x1, y1))
//       }
//     }
//   }

//   /**
//    *  l1 ----
//    *  l2 ====
//    */
//   static overlap(l1, l2) {
//     if (l1.pOrig.y === l2.pOrig.y && l1.pDest.y === l2.pDest.y) {
//       // ---- ====
//       if (l1.pDest.x < l2.pOrig.x && l1.pOrig.x < l2.pOrig.x) {
//         return
//       }

//       // ==== ----
//       if (l2.pDest.x < l1.pOrig.x && l2.pOrig.x < l1.pOrig.x) {
//         return
//       }

//       const maxX = Math.max(l1.pOrig.x, l2.pOrig.x)
//       const maxY = Math.max(l1.pOrig.y, l2.pOrig.y)

//       const minX = Math.min(l1.pDest.x, l2.pDest.x)
//       const minY = Math.min(l1.pDest.y, l2.pDest.y)

//       return new Line(new Point(maxX, maxY), new Point(minX, minY))
//     }
//   }
// }

module.exports = {
  //Line,
  Rectangle
}