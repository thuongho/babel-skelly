'user strict';

// regeneratorRuntime - need this to run generators in the browser node/browserify
// npm install babel-polyfill
require('babel-polyfill');

var utils = require('./utils');
// using isomorphic validation on client
var iso = require('../../portable');
var Square = require('./Square');
var fibonacci = iso.fibonacci;

console.log('Client side code started');
console.log(iso.validateId('isdjlmsld'));

// utils.count();
// var s1 = new Square(5);
// var s2 = new Square();

// console.log(s1.area, s2.area);
// console.log(s1.sayName());

console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next(true)); // resets fib
console.log(fibonacci.next());