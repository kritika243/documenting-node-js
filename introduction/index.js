const fs = require('fs')

// * synchronous
// const text = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(text)
// const text2 = `This is additional new text, ${text}`
// fs.writeFileSync('./txt/output.txt', text2)

// * asynchronous
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  console.log('reading from the first file')
  console.log('data from the first file - ', data1)
  fs.readFile('./txt/read-this.txt', 'utf-8', (err, data2) => {
    console.log('reading from the second file - ')
    console.log(data2)

    fs.writeFile(
      './txt/final.txt',
      'this is extra text that we are writing',
      'utf-8',
      (err) => {
        if (err) console.log(err)
      }
    )
  })
  console.log(
    'finished reading the first file, second reading happening in the background'
  )
})

console.log('reading files in the background')
