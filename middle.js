const middle = (inputArray) => {
  const middleIndex = Math.floor(inputArray.length / 2);
  if (inputArray.length < 3) {
    return [];
  } else if (inputArray.length % 2 === 0) {
    return inputArray.slice(middleIndex - 1, middleIndex + 1);
  }
  return inputArray.slice(middleIndex, middleIndex + 1);
};
