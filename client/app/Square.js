'use strict';

var Polygon = require('./Polygon');

class Square extends Polygon {
  // add default value
  constructor(length = 10) {
    // overriding the quality of the polygon and use length 2x
    super(length, length);
    this.name = 'Square';
  }

  get area() {
    // computed value
    console.log('width', this.width);
    console.log('height', this.height);
    return this.height * this.width;
  }
}

module.exports = Square;