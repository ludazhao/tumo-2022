const BG_COLOR = 255; // white
const SCALE = 50;
const BACKGROUND_SIZE = 15;
const BG = BACKGROUND_SIZE * SCALE;

const SCORECARD_X = 400;
const SCORECARD_Y = BG;
const SCORECARD_LABEL_X_OFFSET = 40;
let SCORECARD_LABEL_Y_OFFSET = 60;
const SCORECARD_TEXT_HEIGHT = 40;

/** assets */
let house1;
let park1;
let street1;

function preload() {
  house1 = loadImage('assets/house1.png');
  park1 = loadImage('assets/park1.png');
  street1 = loadImage('assets/street1.jpeg');
}

function setup() {
  createCanvas(BG + SCORECARD_X, BG);
  background(BG_COLOR);
}

/** HELPER FUNCTIONS TO DRAW THINGS */
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

const P5MAP = new Array(BACKGROUND_SIZE).fill([]).map(_arr => new Array(BACKGROUND_SIZE).fill(''))

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


function addSaveButton() {
  button = createButton('Save File');
  button.position(0, 0);
  button.mousePressed(saveFile);
}


function saveFile() {
  saveJSON(P5MAP, 'city.json');
}