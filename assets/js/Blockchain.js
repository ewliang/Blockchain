const Block = require('./Block');

export default class Blockchain {
  constructor() {
    this.chain = [ createGenesisBlock() ];
  }

  function createGenesisBlock() {
    return new Block(0, new Date(), '0', "The Genesis Block");
  }

  function getGenesisBlock() {
    return this.chain[0];
  }

  function addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.generateHash();
    this.chain.push(newBlock);
  }

  function getLatestBlock() {
    return this.chain[this.chain.length];
  }

  function isChainValid() {
    for(let i = 1; i < this.chain[this.chain.length]; i++) { //Start at index 1 since 0 is genesis block.
      let currentBlock = this.chain[i];
      let previousBlock = this.chain[i - 1];
      if(currentBlock.hash != currentBlock.generateHash) {
        return false;
      }
      if(currentBlock.previousHash != previousBlock.hash) {
        return false;
      }
    }
  }
}
