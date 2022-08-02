import React from 'react';
import CryptoJS from 'react';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

const Enc = () => {
  // const Cryptr = require('cryptr');
  // const cryptr = new Cryptr('ReallySecretKey');
  
  // const encryptedString = cryptr.encrypt('Popcorn');
  // //const decryptedString = cryptr.decrypt(encryptedString);
  
  var data = "Ggydx4oA1+SKBw+unA8BUUm2tnvkQbp1terdF2PEGFYSEZL/ye08op/0b0BauGtIl1dBIodrlKXo2de3MykYmocd3ctxFtIIki01V+M8XeQj6B384o0G+H7NpVx5tCJjPDvdqVRObtxCTqu3r8QRzYTNcMM5bRhbYxCYl8/NRyPQJnmcJDlRBeVOoJiQNA7Qd5UJD/mNivoyMUfYGV7/DlpylQWWwEAHVdgcb865i8jnf3vqURehAXYoaD6Bgodi1EM4H007uv0o6NEOk3H4jQ==";
  var rawData = CryptoJS.enc.Base64.parse(data);
  var key = CryptoJS.enc.Latin1.parse("weJiSEvR5yAC5ftB");
  var iv = CryptoJS.enc.Latin1.parse("ssdkF$HUy2A#D%kd");
  var plaintextData = CryptoJS.AES.decrypt(
    { ciphertext: rawData },
    key,
    { iv: iv });
  var plaintext = plaintextData.toString(CryptoJS.enc.Latin1);
  console.log(plaintext);
  
  console.log('test');
    return (
    <div>
      Enter text to encrypt: 
      
    </div>
  );
}

export default Enc;
