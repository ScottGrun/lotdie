// const eqArrays = (arrayOne, arrayTwo) => {
//   //Start off by checking if arrays are of equal length
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }

//   for (let i = 0; i <= arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }

//   return true;
// };
const eqArrays = require("./eqArrays");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let actualKeys = Object.keys(actual);
  let expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) {
    return console.log(
      `❌| Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }

  for (let item of actualKeys) {
    if (
      actual[item] !== expected[item] &&
      Array.isArray(actual[item]) === false
    ) {
      return console.log(
        `❌| Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
    }

    if (Array.isArray(actual[item])) {
      if (eqArrays(actual[item], expected[item]) === false) {
        return console.log(
          `❌| Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
        );
      }
    }
  }

  return console.log(
    `❎| Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  );
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: "1", b: [1, 1] },{ a: "1", b: [1, 1] });
