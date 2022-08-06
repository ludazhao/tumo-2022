function calculateFAR() {
  let numHouses = 0;
  for (let i = 0; i < CITY_SIZE; i++) {
    for (let j = 0; j < CITY_SIZE; j++) {
      // draw a house if:
      //  1. there's nothing on the square
      //  2. if there is an adjacent street
      if (CITY_STATE.getTile(i, j) === Tiles.HOUSE) {
        numHouses += 1;
      }
    }
  }

  // Assume 3 story houses
  return numHouses * 3 / (CITY_SIZE * CITY_SIZE);
}

/**
 * Percentage of households >= 3 squares away from parks
 */
function calculateParkAccess(parkRaster) {
  let numHouses = 0;
  let numHousesFarAway = 0;

  for (let i = 0; i < CITY_SIZE; i++) {
    for (let j = 0; j < CITY_SIZE; j++) {
      // draw a house if:
      //  1. there's nothing on the square
      //  2. if there is an adjacent street
      if (CITY_STATE.getTile(i, j) === Tiles.HOUSE) {
        numHouses += 1;
        if (parkRaster[i][j] > 3) {
          numHousesFarAway += 1;
        }
      }
    }
  }
  if (numHouses === 0) {
    return numHouses;
  }

  return 1 - numHousesFarAway / numHouses;
}


function getParkAccessBFS(x, y) {
  if (CITY_STATE.getTile(x, y) === Tiles.PARK) {
    return 0;
  }
  const visited = get2DArray(CITY_SIZE, false);
  const candidateQueue = [[x, y, 0]];

  while (candidateQueue.length > 0) {
    // pop first element from the left
    const [x, y, currentDistance] = candidateQueue.shift();
    visited[x][y] = true;

    for (const coords of CITY_STATE.getSurroundingCoords(x, y)) {
      const [adjX, adjY] = coords;

      if (visited[adjX][adjY]) {
        continue;
      }

      if (CITY_STATE.getTile(adjX, adjY) === Tiles.PARK) {
        return currentDistance + 1;
      }
      if (CITY_STATE.getTile(adjX, adjY) !== Tiles.HOUSE) {
        candidateQueue.push([adjX, adjY, currentDistance + 1]);
      }
    }
  }

  // no valid path found
  return null;
}


function visualizeRaster(raster) {

  const min = Math.min(...raster.map(arr => Math.min(...arr)))
  const max = Math.max(...raster.map(arr => Math.max(...arr)))

  for (let i = 0; i < raster.length; i++) {
    for (let j = 0; j < raster.length; j++) {
      if (raster[i][j] === null || CITY_STATE.getTile(i, j) !== Tiles.HOUSE) {
        continue;
      }
      // color the square given the value of the raster
      const perc = (raster[i][j] - min) / (max - min);
      const c = color(255 - 255 * (1 - perc) * (1 - perc), 240, 0, 100);
      fill(c);
      drawSquare(i, j, 1);
    }
  }
}


/** Generate a raster denoting the park access per square */
function generateParkAccess() {
  // "-1" denotes squares that have not been visited
  const raster = get2DArray(CITY_SIZE, null);

  for (let i = 0; i < CITY_SIZE; i++) {
    for (let j = 0; j < CITY_SIZE; j++) {
      if (CITY_STATE.getTile(i, j) === Tiles.HOUSE) {
        // get park access from this spot
        raster[i][j] = getParkAccessBFS(i, j);
      }
    }
  }
  return raster;
}