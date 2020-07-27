const middle = require("../middle");
const { expect } = require("chai");

describe("#middle", () => {
  it("Should return a single element if the array is odd", () => {
    expect(middle([1, 2, 3])).to.deep.equal([2]);
  });

  it("Should return the two middle elements if even", () => {
    expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
});
