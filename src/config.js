import CryptoJS from 'crypto-js';

// 加密 API 密钥
const apiKey = 'f9ba1f64d79dcf68a780e9c4713cc682';
const encryptedApiKey = CryptoJS.AES.encrypt(apiKey, 'your-secret-key').toString();

// 解密函数
function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, 'your-secret-key');
  return bytes.toString(CryptoJS.enc.Utf8);
}

// 导出配置
export default {
  apiKey: encryptedApiKey,
  decryptApiKey: decrypt
}; 