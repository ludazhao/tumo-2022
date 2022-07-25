
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

/** Task 1-3: How to draw two squares */
function draw() {
  /* X, Y, Size */
  drawSquare(1, 1, 1);
  drawSquare(2, 2, 1);
}

/** Exercise 1: Draw this pattern! */
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
  drawSquare(0, 1, 1);
  drawSquare(1, 1, 1);
  drawSquare(2, 1, 1);
  drawSquare(3, 1, 1);
  drawSquare(4, 1, 1);
  drawSquare(5, 1, 1);
  drawSquare(6, 1, 1);
}

/** Task 5-1: Draw a row of blocks, BETTER */
function draw() {
  for (let i = 0; i < 7; i++) {
    drawSquare(i, 1, 1);
  }
}

/** Task 6: Draw three rows of blocks */
function draw() {
  for (let i = 0; i < 7; i++) {
    drawSquare(i, 1, 1);
  }

  for (let i = 0; i < 7; i++) {
    drawSquare(i, 2, 1);
  }

  for (let i = 0; i < 7; i++) {
    drawSquare(i, 3, 1);
  }
}

/** Task 6: Draw an entire background (STRETCH) */
function draw() {
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 7; i++) {
      drawSquare(i, j, 1);
    }
  }
}

/** Task 7: Draw Parks, streets */
function draw() {
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 7; i++) {
      drawSquare(i, j, 1);
    }
  }


  for (let i = 0; i < 7; i++) {
    drawStreet(i, 3);
  }

  for (let i = 0; i < 7; i++) {
    drawHouse(i, 2);
  }

  drawPark(1, 4);
}

/** Exercise 2: Draw this neighborhood! */
function draw() {
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 7; i++) {
      drawSquare(i, j, 1);
    }
  }

  // Horizontal street
  for (let i = 0; i < 7; i++) {
    drawHouse(i, 2);
    drawStreet(i, 3);
  }

  // Vertical street
  for (let i = 4; i < 7; i++) {
    drawHouse(2, i);
    drawStreet(3, i);
    drawHouse(4, i);
  }

  drawPark(1, 5);
  drawPark(5, 5);

}

/** PAUSE - BREAK */

/** Go through basic Javascript materials (http://web.stanford.edu/class/cs106aj/res/lectures/04-Expressions-In-JavaScript.pdf) */
// Learn about variables + functions

/** Task 8: decompose into functions */

function drawBackground() {
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 7; i++) {
      drawSquare(i, j, 1);
    }
  }
}

function drawLandscape() {
  // Horizontal street
  for (let i = 0; i < 7; i++) {
    drawHouse(i, 2);
    drawStreet(i, 3);
  }

  // Vertical street
  for (let i = 4; i < 7; i++) {
    drawHouse(2, i);
    drawStreet(3, i);
    drawHouse(4, i);
  }

  drawPark(1, 5);
  drawPark(5, 5);
}

function draw() {
  drawBackground();
  drawLandscape();
}

/** Task 10: Razzle Dazzle */
const BLOCK_SIZE = 7

function drawBackground() {
  for (let j = 0; j < BLOCK_SIZE; j++) {
    for (let i = 0; i < BLOCK_SIZE; i++) {
      drawSquare(i, j, 1);
    }
  }
}

function drawLandscape() {
  // Horizontal street
  for (let i = 0; i < BLOCK_SIZE; i++) {
    drawHouse(i, 2);
    drawStreet(i, 3);
  }

  // Vertical street
  for (let i = 4; i < BLOCK_SIZE; i++) {
    drawHouse(2, i);
    drawStreet(3, i);
    drawHouse(4, i);
  }


  drawPark(1, 5);
  drawPark(5, 5);
}

function draw() {
  drawBackground();
  drawLandscape();
  addSaveButton();
}