const fs = require('fs')
const { on } = require('stream')

const readStream = fs.createReadStream('./doc3.txt', { encoding: 'utf-8' })
const writeStream = fs.createWriteStream('./doc4.txt')

readStream.on('data', (chunk) => {
  console.log('~~~~~~~~~~~~-------NEW CHUNK OF DATA---------~~~~~~~~~~~~~`')
  // console.log(chunk.toString()) - used {encoding: } in place of this
  console.log(chunk)

  // whatever new chunk of data comes from doc3, write it to doc4
  writeStream.write('\nNEW CHUNK OF DATA\n')
  writeStream.write(chunk)
})

/*=========== PIPING ============*/
// only read from readable and write to writeable
readStream.pipe(writeStream)
