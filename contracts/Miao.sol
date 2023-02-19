// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract Miao{
    string public name;
    address public owner;

    constructor(){
        name = "Miao";
        owner = msg.sender;
    }
    // list products
    function list(uint256 _id,string memory _name,string memory _category) public{


    }
    // buy  products
    // withdraw products

}
