//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GameStreetToken is ERC20("GameStreet Token", "STREET") {
  constructor() {
    _mint(msg.sender, 1000000000 ether);
  }
}