const eqArrays = (arrayOne, arrayTwo) => {
  //Start off by checking if arrays are of equal length
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i <= arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;
