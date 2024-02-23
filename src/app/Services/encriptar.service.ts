import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncriptarService {

  constructor() { }
  
private readonly SALT = CryptoJS.enc.Base64.parse("U2lhcmEtMjAxM19wbVM=");
private readonly ITERATIONS = 1000; 

Encrypt(origin: string, key: string): string{
  try {
    let keyWordArray = CryptoJS.enc.Utf8.parse(key);
    let originWordArray = CryptoJS.enc.Utf16LE.parse(origin);
    let keyAndIv = CryptoJS.PBKDF2(keyWordArray, this.SALT, { 
      keySize: 256/32 + 128/32, 
      iterations: this.ITERATIONS, 
      hasher: CryptoJS.algo.SHA1 
    });
    let hexKeyAndIv = CryptoJS.enc.Hex.stringify(keyAndIv);
    let hexKey = CryptoJS.enc.Hex.parse(hexKeyAndIv.substring(0, 64));
    let iv = CryptoJS.enc.Hex.parse(hexKeyAndIv.substring(64, hexKeyAndIv.length));
    return CryptoJS.AES.encrypt(originWordArray, hexKey, {iv: iv}).toString();
  } 
  catch (error) {
    throw error;
  }
}

Decrypt(encrypted: string, key: string): string{    
  try {
    let keyWordArray = CryptoJS.enc.Utf8.parse(key);

    let keyAndIv = CryptoJS.PBKDF2(keyWordArray, this.SALT, { 
      keySize: 256/32 + 128/32, 
      iterations: this.ITERATIONS,
      hasher: CryptoJS.algo.SHA1 
    });
  
    let hexKeyAndIv = CryptoJS.enc.Hex.stringify(keyAndIv);

    let hexKey = CryptoJS.enc.Hex.parse(hexKeyAndIv.substring(0, 64));
    let iv = CryptoJS.enc.Hex.parse(hexKeyAndIv.substring(64, hexKeyAndIv.length)); 
                                                   
    let decryptedWordArray = CryptoJS.AES.decrypt(encrypted, hexKey, {iv: iv});
    return CryptoJS.enc.Utf16LE.stringify(decryptedWordArray);   
  } 
  catch (error) {
    throw error;
  }
}

  // encriptar(plainText: any): string {   
    
  //   var key = CryptoJS.enc.Utf8.parse('S@LT&KEY');
  //   var iv = CryptoJS.enc.Utf8.parse('@6D65GKJFZA4GSSD');
  //   var encryptedpassword = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), key,
  //     {
  //     keySize: 128 / 8,
  //     iv: iv,
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7
  //     });
  //   return encryptedpassword.toString();
  // }
  // desencriptar(encryptedText: string): string {
    
  //   var key = CryptoJS.enc.Utf8.parse('S@LT&KEY');
  //   var iv = CryptoJS.enc.Utf8.parse('@6D65GKJFZA4GSSD');
  //   var decrypted = CryptoJS.AES.decrypt(encryptedText, key,
  //     {
  //       keySize: 128 / 8,
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //     });
    
  //   return decrypted.toString(CryptoJS.enc.Utf8);
  // }
}
