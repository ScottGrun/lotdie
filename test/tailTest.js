const tail = require("../tail");
const { expect } = require("chai");

describe("#tail", () => {
  it("Should return an array minus the first element", () => {
    let testArr = ["Yo Yo", "Lighthouse", "Labs"];
    expect(tail(testArr)).to.deep.equal(["Lighthouse", "Labs"]);
  });

  it("Should mutate the input array", () => {
    let testArr = ["Yo Yo", "Lighthouse", "Labs"];
    tail(testArr);
    expect(testArr.length).to.equal(3);
  });
});

// no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);
// assertEqual(tail(words)., 2);
