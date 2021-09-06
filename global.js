// global object

global.setTimeout(() => {
  console.log('inside the timeout')
  clearInterval(interval)
}, 4000)

const interval = setInterval(() => {
  console.log('inside the interval')
}, 1000)

console.log(__dirname) // absolute path of the current folder
console.log(__filename) // absolue path of the folder name with the filename
