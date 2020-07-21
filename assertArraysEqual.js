const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return `❌| Assertion Failed: ${actual} !== ${expected}`;
  }

  for (let i = 0; i <= actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return `❌| Assertion Failed: ${actual} !== ${expected}`;
    }
  }
  return `❎| Assertion Passed: ${actual} === ${expected}`;
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, "2", 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 3], [1, 2, 3]));