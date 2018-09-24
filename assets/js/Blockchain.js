const Block = require('./Block');

export default class Blockchain {
  constructor() {
    this.chain = [ createGenesisBlock() ];
  }

  function createGenesisBlock() {
    return new Block(0, new Date(), '', { message: "This is where all life began for this blockchain." });
  }

  function getGenesisBlock() {
    return this.chain[0];
  }

}
