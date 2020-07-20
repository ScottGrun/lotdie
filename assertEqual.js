// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❎| Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌| Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("cat", 4);
assertEqual("cat", "dog");
assertEqual("cat", "cat");
assertEqual(4, 4);
assertEqual(4, 5);