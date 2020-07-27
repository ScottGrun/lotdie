// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');


const eqObjects = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let item of obj1Keys) {
    if (obj1[item] !== obj2[item] && Array.isArray(obj1[item]) === false) {
      return false;
    }
    

    if (Array.isArray(obj1[item])) {
      if (eqArrays(obj1[item], obj2[item]) === false) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
