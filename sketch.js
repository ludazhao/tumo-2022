
/** Starting writing your code here! */
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