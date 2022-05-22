const { readFile } = require('fs')

const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

getData('../dummyTextFiles/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
