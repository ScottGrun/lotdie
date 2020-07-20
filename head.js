// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❎| Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌| Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arrayInput) {
  return arrayInput[0];
};

// TEST CODE
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
