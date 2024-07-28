const crypto = require("crypto");

class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
  }
}

function calculateHash(index, previousHash, timestamp, data) {
  return crypto
    .createHash("sha256")
    .update(index + previousHash + timestamp + data)
    .digest("hex");
}

function createGenesisBlock() {
  const timestamp = new Date().getTime() / 1000;
  const hash = calculateHash(0, "0", timestamp, "Genesis Block");
  return new Block(0, "0", timestamp, "Genesis Block", hash);
}

function createNewBlock(previousBlock, data) {
  const index = previousBlock.index + 1;
  const timestamp = new Date().getTime() / 1000;
  const hash = calculateHash(index, previousBlock.hash, timestamp, data);
  return new Block(index, previousBlock.hash, timestamp, data, hash);
}

class Blockchain {
  constructor() {
    this.chain = [createGenesisBlock()];
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
      this.chain.push(newBlock);
    }
  }

  isValidNewBlock(newBlock, previousBlock) {
    if (previousBlock.index + 1 !== newBlock.index) {
      return false;
    } else if (previousBlock.hash !== newBlock.previousHash) {
      return false;
    } else if (
      calculateHash(
        newBlock.index,
        newBlock.previousHash,
        newBlock.timestamp,
        newBlock.data
      ) !== newBlock.hash
    ) {
      return false;
    }
    return true;
  }
}

// Example usage
let myBlockchain = new Blockchain();
console.log("Genesis Block:", myBlockchain.chain[0]);

for (let i = 1; i <= 10; i++) {
  const newBlock = createNewBlock(
    myBlockchain.getLatestBlock(),
    `Block ${i} data`
  );
  myBlockchain.addBlock(newBlock);
  console.log(`Block ${i} has been added to the blockchain!`);
  console.log(`Hash: ${newBlock.hash}\n`);
}
