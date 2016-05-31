<<<<<<< HEAD
'use strict';

var constantA = 5;

var a = 43;
var b = 32;
console.log(a + '+' + b + ' = ' + (a + b));

function showText() {
  var title = arguments.length <= 0 || arguments[0] === undefined ? 'Default title' : arguments[0];
  var a = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  var b = arguments.length <= 2 || arguments[2] === undefined ? 300 : arguments[2];

  console.log(title + ' ' + a + ' ' + b);
};

showText('Hello World', 2);

var sum = function sum(a, b) {
  return a + b;
};
console.log(sum(2, 3));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'names'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var number = _step.value;

    console.log(number);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
=======
'use strict';

var constantA = 5;

var a = 43;
var b = 32;
console.log(a + '+' + b + ' = ' + (a + b));

function showText() {
  var title = arguments.length <= 0 || arguments[0] === undefined ? 'Default title' : arguments[0];
  var a = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  var b = arguments.length <= 2 || arguments[2] === undefined ? 300 : arguments[2];

  console.log(title + ' ' + a + ' ' + b);
};

showText('Hello World', 2);

var sum = function sum(a, b) {
  return a + b;
};
console.log(sum(2, 3));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'names'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var number = _step.value;

    console.log(number);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
