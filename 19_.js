const SHA256 = require('crypto-js/sha256');

class ProofOfWork {
    constructor(blockData, difficulty = 4) {
        this.blockData = blockData;
        this.difficulty = difficulty;
        this.nonce = 0;
        this.timestamp = new Date().getTime();
       
    }

    calculateHash() {
        const data = this.blockData + this.nonce + this.timestamp;
        return SHA256(data).toString();
    }

    mineBlock() {
        const target = '0'.repeat(this.difficulty);
        while (true) {
            const hashResult = this.calculateHash();
            if (hashResult.startsWith(target)) {
                console.log('Block mined! Nonce:', this.nonce);
                console.log('Hash:', hashResult);
                break;
            } else {
                this.nonce++;
            }
        }
    }
}

// Example usage
const blockData = 'swapnil';
const proofOfWork = new ProofOfWork(blockData, 4);
proofOfWork.mineBlock();
 