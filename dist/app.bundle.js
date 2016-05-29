(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

class Polygon {
  constructor(width, height) {
    this.name = 'Polygon';
    this.width = width;
    this.height = height;
  }

  sayName() {
    console.log('Hi, my name is ' + this.name);
  }
}

module.exports = Polygon;

},{}],2:[function(require,module,exports){
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

},{"./Polygon":1}],3:[function(require,module,exports){
'user strict';

var utils = require('./utils');
// using isomorphic validation on client
var iso = require('../../portable');
var Square = require('./Square');

console.log('Client side code started');
console.log(iso.validateId('isdjlmsld'));

// utils.count();
var s1 = new Square(5);
var s2 = new Square();

console.log(s1.area, s2.area);
console.log(s1.sayName());

},{"../../portable":5,"./Square":2,"./utils":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL1BvbHlnb24uanMiLCJjbGllbnQvYXBwL1NxdWFyZS5qcyIsImNsaWVudC9hcHAvbWFpbi5qcyIsImNsaWVudC9hcHAvdXRpbHMvaW5kZXguanMiLCJwb3J0YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLE1BQU0sT0FBTixDQUFjO0FBQ1osY0FBWSxLQUFaLEVBQW1CLE1BQW5CLEVBQTJCO0FBQ3pCLFNBQUssSUFBTCxHQUFZLFNBQVo7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNEOztBQUVELFlBQVU7QUFDUixZQUFRLEdBQVIsQ0FBWSxvQkFBb0IsS0FBSyxJQUFyQztBQUNEO0FBVFc7O0FBWWQsT0FBTyxPQUFQLEdBQWlCLE9BQWpCOzs7QUNkQTs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQWQ7O0FBRUEsTUFBTSxNQUFOLFNBQXFCLE9BQXJCLENBQTZCOztBQUUzQixjQUFZLFNBQVMsRUFBckIsRUFBeUI7O0FBRXZCLFVBQU0sTUFBTixFQUFjLE1BQWQ7QUFDQSxTQUFLLElBQUwsR0FBWSxRQUFaO0FBQ0Q7O0FBRUQsTUFBSSxJQUFKLEdBQVc7O0FBRVQsWUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLLEtBQTFCO0FBQ0EsWUFBUSxHQUFSLENBQVksUUFBWixFQUFzQixLQUFLLE1BQTNCO0FBQ0EsV0FBTyxLQUFLLE1BQUwsR0FBYyxLQUFLLEtBQTFCO0FBQ0Q7QUFiMEI7O0FBZ0I3QixPQUFPLE9BQVAsR0FBaUIsTUFBakI7OztBQ3BCQTs7QUFFQSxJQUFJLFFBQVEsUUFBUSxTQUFSLENBQVo7O0FBRUEsSUFBSSxNQUFNLFFBQVEsZ0JBQVIsQ0FBVjtBQUNBLElBQUksU0FBUyxRQUFRLFVBQVIsQ0FBYjs7QUFFQSxRQUFRLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFFBQVEsR0FBUixDQUFZLElBQUksVUFBSixDQUFlLFdBQWYsQ0FBWjs7O0FBR0EsSUFBSSxLQUFLLElBQUksTUFBSixDQUFXLENBQVgsQ0FBVDtBQUNBLElBQUksS0FBSyxJQUFJLE1BQUosRUFBVDs7QUFFQSxRQUFRLEdBQVIsQ0FBWSxHQUFHLElBQWYsRUFBcUIsR0FBRyxJQUF4QjtBQUNBLFFBQVEsR0FBUixDQUFZLEdBQUcsT0FBSCxFQUFaOzs7QUNmQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7O0FBRWY7QUFGZSxDQUFqQjs7QUFLQSxTQUFTLEtBQVQsR0FBaUI7QUFDZixNQUFJLFFBQVEsQ0FBWjs7QUFFQSxjQUFZLE1BQU0sUUFBUSxHQUFSLENBQVksT0FBWixDQUFsQixFQUF3QyxHQUF4QztBQUNEOzs7QUNYRDs7OztBQUlBLE9BQU8sT0FBUCxHQUFpQjtBQUNmO0FBRGUsQ0FBakI7O0FBSUEsTUFBTSxZQUFZLE9BQWxCO0FBQ0EsU0FBUyxVQUFULENBQW9CLEVBQXBCLEVBQXdCOztBQUV0QixTQUFPLE9BQU8sRUFBUCxJQUFhLFFBQWIsSUFBeUIsR0FBRyxPQUFILENBQVcsU0FBWCxNQUEwQixDQUExRDtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUG9seWdvbiB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLm5hbWUgPSAnUG9seWdvbic7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgc2F5TmFtZSgpIHtcbiAgICBjb25zb2xlLmxvZygnSGksIG15IG5hbWUgaXMgJyArIHRoaXMubmFtZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2x5Z29uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFBvbHlnb24gPSByZXF1aXJlKCcuL1BvbHlnb24nKTtcblxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgUG9seWdvbiB7XG4gIC8vIGFkZCBkZWZhdWx0IHZhbHVlXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCA9IDEwKSB7XG4gICAgLy8gb3ZlcnJpZGluZyB0aGUgcXVhbGl0eSBvZiB0aGUgcG9seWdvbiBhbmQgdXNlIGxlbmd0aCAyeFxuICAgIHN1cGVyKGxlbmd0aCwgbGVuZ3RoKTtcbiAgICB0aGlzLm5hbWUgPSAnU3F1YXJlJztcbiAgfVxuXG4gIGdldCBhcmVhKCkge1xuICAgIC8vIGNvbXB1dGVkIHZhbHVlXG4gICAgY29uc29sZS5sb2coJ3dpZHRoJywgdGhpcy53aWR0aCk7XG4gICAgY29uc29sZS5sb2coJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgKiB0aGlzLndpZHRoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3F1YXJlOyIsIid1c2VyIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbi8vIHVzaW5nIGlzb21vcnBoaWMgdmFsaWRhdGlvbiBvbiBjbGllbnRcbnZhciBpc28gPSByZXF1aXJlKCcuLi8uLi9wb3J0YWJsZScpO1xudmFyIFNxdWFyZSA9IHJlcXVpcmUoJy4vU3F1YXJlJyk7XG5cbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcbmNvbnNvbGUubG9nKGlzby52YWxpZGF0ZUlkKCdpc2RqbG1zbGQnKSk7XG5cbi8vIHV0aWxzLmNvdW50KCk7XG52YXIgczEgPSBuZXcgU3F1YXJlKDUpO1xudmFyIHMyID0gbmV3IFNxdWFyZSgpO1xuXG5jb25zb2xlLmxvZyhzMS5hcmVhLCBzMi5hcmVhKTtcbmNvbnNvbGUubG9nKHMxLnNheU5hbWUoKSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gb2JqIHByb3BlcnRpZXMgZG9udCBuZWVkIHZhcmlhYmxlIG5hbWVcbiAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICAvLyBhcnJvdyBmdW5jdGlvblxuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8vIGlzb21vcnBoaWMgdmFsaWRhdGlvbiBjb2RlIHRoYXQgd29ya3MgaW4gYm90aCBmcm9udCBhbmQgYmFja1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdGVJZFxufTtcblxuY29uc3QgSURfUFJFRklYID0gJ1VTRVJfJztcbmZ1bmN0aW9uIHZhbGlkYXRlSWQoaWQpIHtcbiAgLy8gcmV0dXJuIHRydWUgb3IgZmFsc2VcbiAgcmV0dXJuIHR5cGVvZiBpZCA9PSAnc3RyaW5nJyAmJiBpZC5pbmRleE9mKElEX1BSRUZJWCkgPT09IDBcbn0iXX0=
