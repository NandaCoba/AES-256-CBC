const crypto = require("crypto")
require("dotenv").config()

// const key = crypto.randomBytes(32)
// const iv = crypto.randomBytes(16)
const key = Buffer.from(process.env.KEY,"hex") 
const iv = Buffer.from(process.env.IV,"hex") 

// console.log(Buffer.from(key,"utf8").toString("hex"))
// console.log(Buffer.from(iv,"utf8").toString("hex"))

const encrypted = (text) => {
    const chiperKey = crypto.createCipheriv("aes-256-cbc",key,iv)
    let encrypt = chiperKey.update(text,"utf8","hex")
    encrypt += chiperKey.final("hex")
    console.log(encrypt)
    return encrypt
}


const decrypted = (text) => {
    const chiperKey = crypto.createDecipheriv("aes-256-cbc",key,iv)
    let decrypt = chiperKey.update(text,"hex","utf8")
    decrypt += chiperKey.final("utf8")
    console.log(decrypt)
    return decrypt
}


let encrypt = encrypted("nanda")
decrypted(encrypt)