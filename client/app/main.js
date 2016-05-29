'user strict';

var utils = require('./utils');
// using isomorphic validation on client
var iso = require('../../portable');

console.log('Client side code started');
console.log(iso.validateId('isdjlmsld'));

utils.count();