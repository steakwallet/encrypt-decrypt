const EthCrypto = require("eth-crypto");

const identity = EthCrypto.createIdentity();

console.log("private:", identity.privateKey);
console.log("public:", identity.publicKey);
