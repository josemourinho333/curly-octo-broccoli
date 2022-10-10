// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
  // simple number variable
  uint256 transactionCount;

  // function that will be emitted. Takes in variable from which is an address, amount type number(uint), so on
  event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  // similar to object
  struct TransferStruct {
    // tpye | name of property
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  //array of ^ transferstructs.
  TransferStruct[] transactions;

  // memory means optional
  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }

  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }


}
