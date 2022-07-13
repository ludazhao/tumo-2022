/** HELPER FUNCTIONS TO START */
function drawPoint(x, y) {
  point(x * SCALE, y * SCALE);
  stroke('purple'); // Change the color
  strokeWeight(10); // Make the points 10 pixels
}

function drawSquare(x, y, size) {
  rect(x * SCALE, y * SCALE, size * SCALE, size * SCALE)
  stroke('grey'); // Change the color
  strokeWeight(2); // Make the points 10 pixels
}

function drawImg(x, y, imgObj) {
  image(
    imgObj,
    x * SCALE,
    y * SCALE,
    SCALE,
    SCALE
  );
}

function drawHouse(x, y) {
  drawImg(x, y, house1);
  P5MAP[x][y] = 'House';
}

function drawPark(x, y) {
  drawImg(x, y, park1);
  P5MAP[x][y] = 'Park';
}

function drawStreet(x, y) {
  drawImg(x, y, street1);
  P5MAP[x][y] = 'Street';
}
