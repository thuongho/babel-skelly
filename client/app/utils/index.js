'use strict';

module.exports = {
  // obj properties dont need variable name
  count
};

function count() {
  var count = 0;
  // arrow function
  setInterval(() => console.log(count++), 400);
}