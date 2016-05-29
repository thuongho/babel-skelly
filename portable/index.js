'use strict';

// isomorphic validation code that works in both front and back

module.exports = {
  validateId
};

const ID_PREFIX = 'USER_';
function validateId(id) {
  // return true or false
  return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0
}