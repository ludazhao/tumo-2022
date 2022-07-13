
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

function addSaveButton() {
  button = createButton('Save File');
  button.position(0, 0);
  button.mousePressed(saveFile);
}

function draw() {
  drawBackground();
  drawLandscape();
  addSaveButton();
}

function saveFile() {
  saveJSON(P5MAP, 'city.json');
}