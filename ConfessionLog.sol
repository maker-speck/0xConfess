// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ConfessionLog {
    event Confessed(address indexed confessor, string confession, uint256 timestamp);

    function confess(string memory _confession) external {
        emit Confessed(msg.sender, _confession, block.timestamp);
    }
}
