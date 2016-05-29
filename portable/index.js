'use strict';

// isomorphic validation code that works in both front and back

module.exports = {
  validateId,
  fibonacci: fibonacci() // invoke it to return generator object
};

const ID_PREFIX = 'USER_';
function validateId(id) {
  // return true or false
  return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0
}

// generator
function* fibonacci() {
  var n1 = 1;
  var n2 = 1;

  while (true) {
    var current = n2;
    n2 = n1;
    n1 += current;
    var reset = yield current;
    if (reset) {
      n1 = 1;
      n2 = 1;
    }
  }
}