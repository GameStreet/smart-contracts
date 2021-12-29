const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GameStreet Token", function () {
  it("Should mint 1 000 000 000 tokens", async function () {

    const [owner] = await ethers.getSigners();

    const GameStreetContract = await ethers.getContractFactory("GameStreetToken");
    const GameStreetToken = await GameStreetContract.deploy();
    await GameStreetToken.deployed();

    expect(await GameStreetToken.balanceOf(owner.address)).to.equal("1000000000000000000000000000");

  });
});
