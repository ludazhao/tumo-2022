let GREY = 200;
let SCALE = 100;
let BG = 5 * SCALE;

/** assets */
let house1;
let park1;
let street1;
let dirt1;

function setup() {
  createCanvas(BG, BG);
  background(GREY);
  house1 = loadImage('assets/house1.png');
  park1 = loadImage('assets/park1.png');
  street1 = loadImage('assets/street1.jpeg');
  ground1 = loadImage('assets/ground1.jpeg');
}