const Block = require('./assets/js/Block');
const Blockchain = require('./assets/js/Blockchain');

var myBlockchain = new Blockchain();

var bk = new Block(0, '01-01-2018', 'sdfsdfsdf123', { hello: 'world' });
myBlockchain.addBlock(bk);
