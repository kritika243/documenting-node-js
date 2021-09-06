const fs = require('fs')

/*=========== to read files ============*/
// asynchronous, takes two arguments - relative path and a callback function which is executed after the file has been read.
fs.readFile('./README.md', (err, data) => {
  if (err) console.log(err) // if any error, then log it
  // console.log(data)  - returns a buffer of the content of file
  console.log(data.toString()) // will log the required
})

/*============= to write files =============*/
// asynchromous, takes 3 arguments - path, what to write and a callback func
fs.writeFile('./doc.txt', 'hello world', () => {
  console.log('completed writing')
})
// if the path mentioned doesnot exist - it will create that file and add the content -:
fs.writeFile('./doc2.txt', 'hello node', () => {
  console.log('completed writing')
})

/*============= directories =============*/
// if assets folder does not exist in the current directory
if (!fs.existsSync('./assets')) {
  // note - existsSync() is synchronous

  // in the current directory make a dir called assets, asynchronously
  fs.mkdir('./assets', (err) => {
    if (err) console.log(err)

    console.log('folder created')
  })
} else {
  //  delete that directory: assets
  fs.rmdir('./assets', (err) => {
    if (err) console.log(err)

    console.log('folder deleted')
  })
}

/*============== deleting files ==============*/
if (fs.existsSync('./deleteme.txt')) {
  fs.unlink('./deleteme.txt', (err) => {
    if (err) console.log(err)

    console.log('fire deleted')
  })
}
