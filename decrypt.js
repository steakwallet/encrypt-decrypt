const EthCrypto = require("eth-crypto");

const [, , privateKey, encryptedMessage] = process.argv;

(async function () {
  const decrypted = await EthCrypto.decryptWithPrivateKey(
    privateKey,
    EthCrypto.cipher.parse(encryptedMessage)
  );
  console.log(decrypted);
})();
