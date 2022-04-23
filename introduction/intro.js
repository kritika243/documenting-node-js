// the console is in the terminal
console.log('Hello World')

// global object instead of window object
// console.log(global)

// has common core modules
// CommonJs modules instead of ES6 imports - 'require' instead of import
const os = require('os')
console.log(os.type())
console.log(os.homedir())
console.log(os.version())
