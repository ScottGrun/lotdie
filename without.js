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

module.exports = without;

// console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
// console.log(assertArraysEqual(without([1, "2", 3], [1]), [2, 3]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
