(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'user strict';

var utils = require('./utils');
// using isomorphic validation on client
var iso = require('../../portable');

console.log('Client side code started');
console.log(iso.validateId('isdjlmsld'));

utils.count();

},{"../../portable":3,"./utils":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

// isomorphic validation code that works in both front and back

module.exports = {
  validateId
};

const ID_PREFIX = 'USER_';
function validateId(id) {
  // return true or false
  return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL21haW4uanMiLCJjbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIiwicG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLFFBQVEsUUFBUSxTQUFSLENBQVo7O0FBRUEsSUFBSSxNQUFNLFFBQVEsZ0JBQVIsQ0FBVjs7QUFFQSxRQUFRLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFFBQVEsR0FBUixDQUFZLElBQUksVUFBSixDQUFlLFdBQWYsQ0FBWjs7QUFFQSxNQUFNLEtBQU47OztBQ1RBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjs7QUFFZjtBQUZlLENBQWpCOztBQUtBLFNBQVMsS0FBVCxHQUFpQjtBQUNmLE1BQUksUUFBUSxDQUFaOztBQUVBLGNBQVksTUFBTSxRQUFRLEdBQVIsQ0FBWSxPQUFaLENBQWxCLEVBQXdDLEdBQXhDO0FBQ0Q7OztBQ1hEOzs7O0FBSUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2Y7QUFEZSxDQUFqQjs7QUFJQSxNQUFNLFlBQVksT0FBbEI7QUFDQSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7O0FBRXRCLFNBQU8sT0FBTyxFQUFQLElBQWEsUUFBYixJQUF5QixHQUFHLE9BQUgsQ0FBVyxTQUFYLE1BQTBCLENBQTFEO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZXIgc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuLy8gdXNpbmcgaXNvbW9ycGhpYyB2YWxpZGF0aW9uIG9uIGNsaWVudFxudmFyIGlzbyA9IHJlcXVpcmUoJy4uLy4uL3BvcnRhYmxlJyk7XG5cbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcbmNvbnNvbGUubG9nKGlzby52YWxpZGF0ZUlkKCdpc2RqbG1zbGQnKSk7XG5cbnV0aWxzLmNvdW50KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gb2JqIHByb3BlcnRpZXMgZG9udCBuZWVkIHZhcmlhYmxlIG5hbWVcbiAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICAvLyBhcnJvdyBmdW5jdGlvblxuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8vIGlzb21vcnBoaWMgdmFsaWRhdGlvbiBjb2RlIHRoYXQgd29ya3MgaW4gYm90aCBmcm9udCBhbmQgYmFja1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdGVJZFxufTtcblxuY29uc3QgSURfUFJFRklYID0gJ1VTRVJfJztcbmZ1bmN0aW9uIHZhbGlkYXRlSWQoaWQpIHtcbiAgLy8gcmV0dXJuIHRydWUgb3IgZmFsc2VcbiAgcmV0dXJuIHR5cGVvZiBpZCA9PSAnc3RyaW5nJyAmJiBpZC5pbmRleE9mKElEX1BSRUZJWCkgPT09IDBcbn0iXX0=
