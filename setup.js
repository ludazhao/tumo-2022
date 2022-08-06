// const BG_COLOR = 255; // white
const BG_COLOR = 240; // grey
const SCALE = 100;
const BACKGROUND_SIZE = 15;
const BG = BACKGROUND_SIZE * SCALE;
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
  noLoop();
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