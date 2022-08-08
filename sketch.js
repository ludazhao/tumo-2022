const CITY_SIZE = 15;
const CITY_STATE = new City(CITY_SIZE);

function drawBackground() {
  for (let j = 0; j < CITY_SIZE; j++) {
    for (let i = 0; i < CITY_SIZE; i++) {
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

function drawStreetRecursive(startX, endX, startY, endY, direction) {
  if ((endX - startX) < 3 || (endY - startY) < 3 || (endX - startX) * (endY - startY) < 30) {
    return;
  }
  const street_row = int(random(startX + 1, endX - 1));
  for (let i = startY; i < endY; i++) {
    if (direction === 'HORIZONTAL') {
      CITY_STATE.drawStreet(i, street_row);
    } else {
      CITY_STATE.drawStreet(street_row, i);
    }
  }

  // swap the X-Y coordinates
  drawStreetRecursive(startY, endY, startX, street_row, flipDirection(direction));
  drawStreetRecursive(startY, endY, street_row + 1, endX, flipDirection(direction));
}

function drawHousesNearStreets() {
  for (let i = 0; i < CITY_SIZE; i++) {
    for (let j = 0; j < CITY_SIZE; j++) {
      // draw a house if:
      //  1. there's nothing on the square
      //  2. if there is an adjacent street
      if (CITY_STATE.getTile(i, j) === Tiles.EMPTY &&
        CITY_STATE.hasAdjacentStreet(i, j)) {
        if (random(1) < 0.8) {
          CITY_STATE.drawHouse(i, j);
        }
      }
    }
  }
}

function drawParks() {
  for (let i = 0; i < CITY_SIZE; i++) {
    for (let j = 0; j < CITY_SIZE; j++) {
      // draw a park if:
      //  1. there's nothing on the square
      if (CITY_STATE.getTile(i, j) === Tiles.EMPTY) {
        if (random(1) < 0.5) {
          CITY_STATE.drawPark(i, j);
        }
      }
    }
  }
}

function drawLandscape() {
  drawStreetRecursive(0, CITY_SIZE, 0, CITY_SIZE, 'HORIZONTAL');
  drawHousesNearStreets();
  drawParks();
}

function draw() {
  drawBackground();
  drawLandscape();
  addSaveButton();
  drawScorecard();

  const far = calculateFAR();
  addToScorecard('Floor Area Ratio (FAR)', far);

  const parkAccessRaster = generateParkAccess();
  visualizeRaster(parkAccessRaster);

  const parkAccessScore = calculateParkAccess(parkAccessRaster);
  addToScorecard('Park Access', parkAccessScore);
}