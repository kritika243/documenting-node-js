const fs = require('fs')

const text = fs.readFileSync('./txt/input.txt', 'utf-8')

console.log(text)

const text2 = `This is additional new text, ${text}`
fs.writeFileSync('./txt/output.txt', text2)
