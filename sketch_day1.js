
/** Review: Coordinate System */

/** Task 1-1: Draw a point */
function draw() {
  drawPoint(1, 1);
}

/** Task 1-2: Draw another point */
function draw() {
  drawPoint(1, 1);
  drawPoint(2, 2);
}

/** Task 1-3: How to draw a square */
function draw() {
  /* X, Y, Size */
  drawSquare(1, 1, 1);
}

/** Exercise 1-1 */
function draw() {
  /* X, Y, Size */
  drawSquare(1, 1, 1);
  drawSquare(1, 3, 1);
  drawSquare(2, 2, 1);
  drawSquare(3, 1, 1);
  drawSquare(3, 3, 1);
}

/** Task 4: Draw a house */
function draw() {
  /* X, Y, Size */
  drawSquare(1, 1, 1);
  drawSquare(1, 3, 1);
  drawSquare(2, 2, 1);
  drawSquare(3, 1, 1);
  drawSquare(3, 3, 1);
  drawHouse(1, 1);
}

/** Task 5: Draw a row of blocks */
function draw() {
  for (let i = 0; i < 5; i++) {
    drawSquare(i, 1, 1);
  }
}

/** Task 6: Draw three rows of blocks */
function draw() {
  for (let i = 0; i < 5; i++) {
    drawSquare(i, 1, 1);
  }

  for (let i = 0; i < 5; i++) {
    drawSquare(i, 2, 1);
  }

  for (let i = 0; i < 5; i++) {
    drawSquare(i, 3, 1);
  }

}

/** Task 6: Even better! (STRETCH) */
function draw() {
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      drawSquare(i, 1, 1);
    }
  }
}

/** Task 7: Draw Parks, streets */
function draw() {
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      drawSquare(i, j, 1);
    }
  }

  for (let i = 0; i < 5; i++) {
    drawHouse(i, 3);
  }

  drawPark(1, 1);
  for (let i = 0; i < 5; i++) {
    drawStreet(i, 2);
  }
}

/** PAUSE - BREAK */

/** Go through basic Javascript materials (http://web.stanford.edu/class/cs106aj/res/lectures/04-Expressions-In-JavaScript.pdf) */
// Learn about variables + functions

/** Task 8: decompose into functions */

function drawBackground() {
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      drawSquare(i, j, 1);
    }
  }
}

function drawHouses() {
  for (let i = 0; i < 5; i++) {
    drawHouse(i, 3);
  }

  drawPark(1, 1);
  for (let i = 0; i < 5; i++) {
    drawStreet(i, 2);
  }
}

function draw() {
  drawBackground();
  drawLandscape();
}