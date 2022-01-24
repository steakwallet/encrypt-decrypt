const EthCrypto = require("eth-crypto");

const [, , publicKey, message] = process.argv;

(async function () {
  const encrypted = await EthCrypto.encryptWithPublicKey(publicKey, message);
  console.log(EthCrypto.cipher.stringify(encrypted));
})();
