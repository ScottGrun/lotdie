

const findKeyByValue = (objToSearch, findValue)=>{
  let keys = Object.keys(objToSearch);
  let values = Object.values(objToSearch);
  for (let i = 0; i < keys.length; i++) {
    if (values[i] === findValue) {
      return keys[i];
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);