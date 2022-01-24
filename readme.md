# Encrypt - Decrypt

Simple command line tools for securely encrypting and decrypting payloads.

## Setup

1. Get the project on your local machine `git clone https://github.com/steakwallet/encrypt-decrypt.git`
2. Change directory into the project `cd encrypt-decrypt`
3. Install the necessary dependencies `yarn`
4. Generate an account, run the command `node generate-account.js` and take note of the corresponding private and public key values

## Encryption

1. To encrypt any value, `node encrypt.js "PUBLIC KEY" "PAYLOAD TO ENCRYPT"`

## Decryption

1. To decrypt any value, `node decrypt.js "PRIVATE KEY" "PAYLOAD TO DECRYPT"`
