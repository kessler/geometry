const test = require('ava')
const { Rectangle } = require('../index.js')

test('no intersection', t => {
  const r1 = Rectangle.from(1, 1).to(3, 3)
  const r2 = Rectangle.from(5, 5).to(10, 10)
  
  let intersection = r1.intersectionWith(r2)
  t.is(intersection, undefined)
  
  intersection = r2.intersectionWith(r1)
  t.is(intersection, undefined)
})

test('complete overlap', t => {
  const r1 = Rectangle.from(1, 1).to(3, 3)
  const r2 = Rectangle.from(1, 1).to(3, 3)
  
  let intersection = r1.intersectionWith(r2)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [1, 1, 3, 3])

  intersection = r2.intersectionWith(r1)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [1, 1, 3, 3])
})

/*
   -------
  |       |
  |    -------
  |   |   |   |
   ---|---    |
      |       |
       -------
*/
test('partial intersection', t => {
	const r1 = Rectangle.from(1, 1).to(10, 10)
	const r2 = Rectangle.from(5, 5).to(15, 15)
	
  let intersection = r1.intersectionWith(r2)
	t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [5, 5, 10, 10])

  intersection = r2.intersectionWith(r1)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [5, 5, 10, 10])
})

/*
   ------- ----
  |   |   |    |
  |   |   |    |
  |   |   |    |
   ------- ---- 
*/
test('partial intersection/overlap', t => {
  const r1 = Rectangle.from(1, 1).to(10, 10)
  const r2 = Rectangle.from(5, 1).to(15, 10)
  
  let intersection = r1.intersectionWith(r2)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [5, 1, 10, 10])

  intersection = r2.intersectionWith(r1)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [5, 1, 10, 10])
})

/*
   -----------
  |           |
  |  ----     |
  | |    |    |
  | |    |    |
  |  ----     |
   ----------- 
*/
test('fully contained', t => {
  const r1 = Rectangle.from(1, 1).to(10, 10)
  const r2 = Rectangle.from(2, 2).to(5, 5)
  
  let intersection = r1.intersectionWith(r2)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [2, 2, 5, 5])

  intersection = r2.intersectionWith(r1)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [2, 2, 5, 5])
})

/*
   -----------
  |           |
  |      ---------
  |     |     |   |
  |     |     |   |
  |      --------- 
  |           |
   -----------
*/
test('partially contained', t => {
  const r1 = Rectangle.from(1, 1).to(10, 10)
  const r2 = Rectangle.from(3, 3).to(15, 7)
  
  let intersection = r1.intersectionWith(r2)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [3, 3, 10, 7])

  intersection = r2.intersectionWith(r1)
  t.not(intersection, undefined)
  t.deepEqual(intersection.toArray(), [3, 3, 10, 7])
})
