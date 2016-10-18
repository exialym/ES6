'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function multiply(x, y) {
  return x * y;
};

var Person = function Person() {
  _classCallCheck(this, Person);
};

exports.firstName = firstName;
exports.lastName = lastName;
exports.year = year;
exports.mul = multiply;
exports.Person = Person;

setTimeout(function () {
  return exports.year = year = 2016;
}, 5000);
