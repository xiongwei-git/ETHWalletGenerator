'use strict';
const secp256k1 = require("secp256k1/elliptic");
const createKeccakHash = require("keccak");
const crypto = require('crypto');

// 地址转换
function toChecksumAddress(address) {
    address = address.toLowerCase().replace('0x', '');
    var hash = createKeccakHash('keccak256').update(address).digest('hex');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
            ret += address[i].toUpperCase();
        } else {
            ret += address[i];
        }
    }
    return ret;
}

function generate() {
  // 生成私钥
  const privateKey = crypto.randomBytes(32);
  // 生成公钥
  const publicKey = secp256k1.publicKeyCreate(privateKey, false).slice(1);
  // 生成地址
  const address = createKeccakHash("keccak256").update(publicKey).digest().slice(-20);
  //16进制的私钥
  const privateKeyHex = privateKey.toString('hex');
  //合法的地址
  const addressValid = toChecksumAddress(address.toString('hex'));
  // 查看结果
  // console.log(normPrivateKey);
  // console.log(normAddress);
  return new Array(addressValid,privateKeyHex);
}

module.exports = {
  generator: generate
};
