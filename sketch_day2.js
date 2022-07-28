/** FINAL DAY 2 */
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

/** FINAL DAY 2 */
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

function drawScorecard() {
  stroke('black');
  rect(BG, 0, SCORECARD_X, SCORECARD_Y)

  strokeWeight(1);
  textSize(16);
  text('Key Metrics', BG + SCORECARD_LABEL_X_OFFSET, SCORECARD_LABEL_Y_OFFSET);
}

function calculateParkAccess() {
  // TODO: implement
  return 0;
}

function sumResiGFA() {
  let numHouses = 0;
  for (let i = 0; i < P5MAP.length; i++) {
    for (let j = 0; j < P5MAP.length; j++) {
      // draw a house if:
      //  1. there's nothing on the square
      //  2. if there is an adjacent street
      if (P5MAP[i][j] === 'House') {
        numHouses += 1;
      }
    }
  }

  // Assume 3 story houses
  return numHouses * 3 / BLOCK_SIZE / BLOCK_SIZE;
}

function addToScorecard(metricName, score) {
  strokeWeight(0.5);
  textSize(14);
  // move down to the next column
  SCORECARD_LABEL_Y_OFFSET += SCORECARD_TEXT_HEIGHT;
  text(metricName, BG + SCORECARD_LABEL_X_OFFSET, SCORECARD_LABEL_Y_OFFSET);
  text(score.toFixed(2), BG + SCORECARD_X - SCORECARD_LABEL_X_OFFSET * 2, SCORECARD_LABEL_Y_OFFSET);
}

function draw() {
  drawBackground();
  drawLandscape();
  addSaveButton();

  drawScorecard();
  const parkAccessScore = calculateParkAccess();
  const gfaResiScore = sumResiGFA();
  addToScorecard('Floor Area Ratio (FAR)', gfaResiScore);
  addToScorecard('Park Access', parkAccessScore);
  noLoop();
}