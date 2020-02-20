import CryptoJS from 'crypto-js'
/**
 * getBase64
 */
const getBase64 = (word) => {
    var str = CryptoJS.enc.Utf8.parse(word)
    var base64 = CryptoJS.enc.Base64.stringify(str)
    return base64
}
export default getBase64
