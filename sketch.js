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

  drawScorecard();

  const far = calculateFAR();
  addToScorecard('Floor Area Ratio (FAR)', far);

  const parkAccessRaster = generateParkAccess();
  const parkAccessScore = calculateParkAccess(parkAccessRaster);
  addToScorecard('Park Access', parkAccessScore);
}

// const BLOCK_SIZE = 15

// function drawBackground() {
//   for (let j = 0; j < BLOCK_SIZE; j++) {
//     for (let i = 0; i < BLOCK_SIZE; i++) {
//       drawSquare(i, j, 1);
//     }
//   }
// }

// function flipDirection(direction) {
//   if (direction === 'HORIZONTAL') {
//     return 'VERTICAL';
//   } else {
//     return 'HORIZONTAL';
//   }
// }


// // get an array of adjacent positions(in (x, y) pairs), taking
// // into account for edges of the board
// function getAdj(x, y) {
//   res = []
//   if (x > 0) {
//     res.push([x - 1, y]);
//   }
//   if (x < P5MAP.length - 1) {
//     res.push([x + 1, y]);
//   }
//   if (y > 0) {
//     res.push([x, y - 1]);
//   }
//   if (y < P5MAP.length - 1) {
//     res.push([x, y + 1]);
//   }
//   return res;
// }

// async function drawStreetRecursive(startX, endX, startY, endY, direction) {
//   if ((endX - startX) < 3 || (endY - startY) < 3 || (endX - startX) * (endY - startY) < 30) {
//     return;
//   }
//   const street_row = int(random(startX + 1, endX - 1));
//   for (let i = startY; i < endY; i++) {
//     if (direction === 'HORIZONTAL') {
//       drawStreet(i, street_row);
//     } else {
//       drawStreet(street_row, i);
//     }
//   }

//   // swap the X-Y coordinates
//   drawStreetRecursive(startY, endY, startX, street_row, flipDirection(direction));
//   drawStreetRecursive(startY, endY, street_row + 1, endX, flipDirection(direction));
// }

// function drawParks() {
//   for (let i = 0; i < P5MAP.length; i++) {
//     for (let j = 0; j < P5MAP.length; j++) {
//       // draw a park if:
//       //  1. there's nothing on the square
//       if (P5MAP[i][j] === '') {
//         if (random(1) < 0.5) {
//           drawPark(i, j);
//         }
//       }
//     }
//   }
// }


// function drawLandscape() {
//   drawStreetRecursive(0, BLOCK_SIZE, 0, BLOCK_SIZE, 'HORIZONTAL');
//   drawHousesNearStreets();
//   drawParks();
// }

// function drawScorecard() {
//   stroke('black');
//   rect(BG, 0, SCORECARD_X, SCORECARD_Y)

//   strokeWeight(1);
//   textSize(16);
//   text('Key Metrics', BG + SCORECARD_LABEL_X_OFFSET, SCORECARD_LABEL_Y_OFFSET);
// }


// function getParkAccessRecursive(raster, x, y, visited) {
//   if (P5MAP[x][y] === 'Park') {
//     return 0;
//   }

//   if (raster[x][y] !== null) {
//     // return score if it's already calculated
//     return raster[x][y];
//   }

//   const adjScores = [];

//   visited[x][y] = true;
//   for (const coords of getAdj(x, y)) {
//     const [adjX, adjY] = coords;
//     if (P5MAP[adjX][adjY] !== 'House' && !visited[adjX][adjY]) {
//       adjScore = getParkAccessRecursive(raster, adjX, adjY, visited);
//       adjScores.push(adjScore);
//     }
//   }
//   // reset flag raster
//   visited[x][y] = false;

//   const validAdjScores = adjScores.filter(val => val !== null);
//   // if no valid adjacent score, this square is a "dead-end". leave as is
//   if (validAdjScores.length === 0) {
//     return null;
//   }

//   score = Math.min(...validAdjScores) + 1;
//   // cache value
//   raster[x][y] = score;
//   return score;
// }

// /** Generate a raster denoting the park access per square */
// function generateParkAccess() {
//   // "-1" denotes squares that have not been visited
//   const raster = new Array(BLOCK_SIZE).fill([]).map(_arr => new Array(BLOCK_SIZE).fill(null))
//   const visited = new Array(BLOCK_SIZE).fill([]).map(_arr => new Array(BLOCK_SIZE).fill(false))

//   for (let i = 0; i < P5MAP.length; i++) {
//     for (let j = 0; j < P5MAP.length; j++) {
//       // draw a house if:
//       //  1. there's nothing on the square
//       //  2. if there is an adjacent street
//       if (P5MAP[i][j] === 'House') {
//         getParkAccessRecursive(raster, i, j, visited);
//       }
//     }
//   }
//   return raster;
// }

// function sumResiGFA() {
//   let numHouses = 0;
//   for (let i = 0; i < P5MAP.length; i++) {
//     for (let j = 0; j < P5MAP.length; j++) {
//       // draw a house if:
//       //  1. there's nothing on the square
//       //  2. if there is an adjacent street
//       if (P5MAP[i][j] === 'House') {
//         numHouses += 1;
//       }
//     }
//   }

//   // Assume 3 story houses
//   return numHouses * 3 / BLOCK_SIZE / BLOCK_SIZE;
// }

// function addToScorecard(metricName, score) {
//   strokeWeight(0.5);
//   textSize(14);
//   // move down to the next column
//   SCORECARD_LABEL_Y_OFFSET += SCORECARD_TEXT_HEIGHT;
//   text(metricName, BG + SCORECARD_LABEL_X_OFFSET, SCORECARD_LABEL_Y_OFFSET);
//   text(score.toFixed(2), BG + SCORECARD_X - SCORECARD_LABEL_X_OFFSET * 2, SCORECARD_LABEL_Y_OFFSET);
// }

// function visualizeRaster(raster) {

//   const min = Math.min(...raster.map(arr => Math.min(...arr)))
//   const max = Math.max(...raster.map(arr => Math.max(...arr)))

//   for (let i = 0; i < raster.length; i++) {
//     for (let j = 0; j < raster.length; j++) {
//       if (raster[i][j] === null || P5MAP[i][j] !== 'House') {
//         continue;
//       }
//       // color the square given the value of the raster
//       const perc = (raster[i][j] - min) /(max - min)
//       const c = color(255 - 255 * (1 - perc) * (1 - perc), 240, 0, 100)
//       fill(c);
//       drawSquare(i, j, 1)
//     }
//   }
// }

// function draw() {
//   /** Draw UI elements */
//   drawBackground();
//   drawLandscape();
//   addSaveButton();
//   drawScorecard();

//   /** Calculate metrics */
//   const parkAccessRaster = generateParkAccess();
//   const parkAccessScore = calculateParkAccess(parkAccessRaster);
//   addToScorecard('Park Access', parkAccessScore);

//   const gfaResiScore = sumResiGFA();
//   addToScorecard('Floor Area Ratio (FAR)', gfaResiScore);
//   visualizeRaster(parkAccessRaster, '#fffa00', '#00fa00')
//   noLoop();
// }