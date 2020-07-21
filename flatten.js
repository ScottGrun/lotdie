const flatten = (arrayToFlatten) => {
  let flattenedArray = [];
  for (let topLevel = 0; topLevel < arrayToFlatten.length; topLevel++) {
    if (Array.isArray(arrayToFlatten[topLevel]) === false) {
      flattenedArray.push(arrayToFlatten[topLevel]);
    } else {
      for (
        let secondLevel = 0;
        secondLevel < arrayToFlatten[topLevel].length;
        secondLevel++
      ) {
        flattenedArray.push(arrayToFlatten[topLevel][secondLevel]);
      }
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
