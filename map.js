// const words = ["ground", "control", "to", "major", "tom"];

const map = function(inputArray, callbackFunc) {
  const results = [];
  for (let i = 0; i < inputArray.length; i++) {
    results.push(callbackFunc(inputArray[i]));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);