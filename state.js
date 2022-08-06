const EMPTY = '';
const PARK = 'P';
const HOUSE = 'H';
const STREET = 'S';

const Tiles = {
  EMPTY: '',
  PARK: 'P',
  HOUSE: 'H',
  STREET: 'S'
}

function get2DArray(size, initialValue) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      arr[i][j] = initialValue;
    }
  }

  return arr;
}

// global game state
class City {
  constructor(size) {
    this.size = size;

    // initialize a 2-D array
    this.state = get2DArray(size, Tiles.EMPTY);
  }

  drawHouse(x, y) {
    drawImg(x, y, house1);
    this.state[x][y] = Tiles.HOUSE;
  }

  drawPark(x, y) {
    drawImg(x, y, park1);
    this.state[x][y] = Tiles.PARK;
  }

  drawStreet(x, y) {
    drawImg(x, y, street1);
    this.state[x][y] = Tiles.STREET;
  }

  getTile(x, y) {
    return this.state[x][y];
  }

  getSurroundingCoords(x, y) {
    const coords = [];

    if (x > 0) {
      coords.push([x - 1, y]);
    }
    if (x < this.size - 1) {
      coords.push([x + 1, y]);
    }
    if (y > 0) {
      coords.push([x, y - 1]);
    }
    if (y < this.size - 1) {
      coords.push([x, y + 1]);
    }
    return coords;

  }

  // returns true if an surrounding tile has a street tile
  hasAdjacentStreet(x, y) {
    const coords = this.getSurroundingCoords(x, y);
    return coords.some(([x, y]) => this.getTile(x, y) === Tiles.STREET);
  }
}