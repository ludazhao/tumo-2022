let GREY = 200;
let SCALE = 100;
let SIZE = 7;
let BG = SIZE * SCALE;

let P5MAP = new Array(SIZE).fill([]).map(_arr => new Array(SIZE).fill(''))

/** assets */
let house1;
let park1;
let street1;

function setup() {
  createCanvas(BG, BG);
  background(GREY);
  house1 = loadImage('assets/house1.png');
  park1 = loadImage('assets/park1.png');
  street1 = loadImage('assets/street1.jpeg');
}