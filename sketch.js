const BLOCK_SIZE = 15

function drawBackground() {
  for (let j = 0; j < BLOCK_SIZE; j++) {
    for (let i = 0; i < BLOCK_SIZE; i++) {
      drawSquare(i, j, 1);
    }
  }
}

function flipDirection(direction) {
  if (direction === 'HORIZONTAL') {
    return 'VERTICAL';
  } else {
    return 'HORIZONTAL';
  }
}

// a custom 'sleep' or wait' function, that returns a Promise that resolves only after a timeout
function sleep(millisecondsDuration) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

async function drawStreetRecursive(startX, endX, startY, endY, direction) {
  if ((endX - startX) < 3 || (endY - startY) < 3 || (endX - startX) * (endY - startY) < 30) {
    return;
  }
  const street_row = int(random(startX + 1, endX - 1));
  for (let i = startY; i < endY; i++) {
    if (direction === 'HORIZONTAL') {
      drawStreet(i, street_row);
    } else {
      drawStreet(street_row, i);
    }
  }

  // swap the X-Y coordinates
  drawStreetRecursive(startY, endY, startX, street_row, flipDirection(direction));
  drawStreetRecursive(startY, endY, street_row + 1, endX, flipDirection(direction));
}

function checkForStreet(x, y) {
  if ((x < P5MAP.length - 1 && P5MAP[x + 1][y] === 'Street') ||
      (x > 0 && P5MAP[x - 1][y] === 'Street') ||
      (y < P5MAP.length - 1 && P5MAP[x][y + 1] === 'Street') ||
      (y > 0 && P5MAP[x][y - 1] === 'Street')) {
    return true;
  }

  return false;
}

function drawHousesNearStreets() {
  for (let i = 0; i < P5MAP.length; i++) {
    for (let j = 0; j < P5MAP.length; j++) {
      // draw a house if:
      //  1. there's nothing on the square
      //  2. if there is an adjacent street
      if (P5MAP[i][j] === '' && checkForStreet(i, j)) {
        drawHouse(i, j);
      }
    }
  }
}


function drawParks() {
  for (let i = 0; i < P5MAP.length; i++) {
    for (let j = 0; j < P5MAP.length; j++) {
      // draw a park if:
      //  1. there's nothing on the square
      if (P5MAP[i][j] === '') {
        drawPark(i, j);
      }
    }
  }
}


function drawLandscape() {
  drawStreetRecursive(0, BLOCK_SIZE, 0, BLOCK_SIZE, 'HORIZONTAL');
  drawHousesNearStreets();
  drawParks();
}

function draw() {
  drawBackground();
  drawLandscape();
  addSaveButton();

  noLoop();
}