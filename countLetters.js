const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❎| Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌| Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (inputString) => {
  let string = inputString.split(" ").join("");
  let countedLetters = {};
  for (let char of string) {
    if (!countedLetters[char]) {
      countedLetters[char] = 1;
    } else {
      countedLetters[char] += 1;
    }
  }
  return countedLetters;
};


