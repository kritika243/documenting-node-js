// the console is in the terminal
console.log('Hello World')

// global object instead of window object
// console.log(global)

// has common core modules
// CommonJs modules instead of ES6 imports - 'require' instead of import
// const os = require('os')
// const path = require('path')

// console.log(os.type())
// console.log(os.homedir())
// console.log(os.version())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

const math = require('./math')
console.log(math.add(2, 6))
console.log(math.divide(45, 5))
