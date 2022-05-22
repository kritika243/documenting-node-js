const { readFile } = require('fs')

const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

// getData('../dummyTextFiles/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

const start = async () => {
  try {
    const first = await getData('../dummyTextFiles/first.txt')
    const second = await getData('../dummyTextFiles/second.txt')
    console.log(first)
    console.log(second)
  } catch (error) {
    console.log(error)
  }
}

start()
