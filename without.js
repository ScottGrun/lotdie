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

const without = (sourceArray, itemsToRemove) => {
  let cleanedArray = [];
  for (let a = 0; a < sourceArray.length; a++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (sourceArray[a] === itemsToRemove[i]) {
        a++;
      }
    }
    cleanedArray.push(sourceArray[a]);
  }
  return cleanedArray;
};


console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without([1, "2", 3], [1]), [2, 3]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));