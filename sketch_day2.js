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