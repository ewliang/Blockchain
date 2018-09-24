const crypto = require('crypto');
const secret = 'this is my secret';

export default class Block {
  constructor(index, timestamp, previousHash, data) {
    this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.data = data;
    this.hash = this.generateHash();
  }

  generateHash() {
    return crypto.createHmac('sha256', secret)
    .update(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data))
    .digest('hex');
  }
}
