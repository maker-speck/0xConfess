// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TRUTH is ERC20 {
    constructor() ERC20("Terminal of Truths", "TRTH") {
        _mint(msg.sender, 6969000000 * 10 ** decimals());
    }
}
