const http = require('http')
const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name) => {
//   console.log(`data received, hi ${name}`)
// })
// customEmitter.on('response', () => {
//   console.log(`some other logic`)
// })

// customEmitter.emit('response', 'john')


const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Welcome')
})


server.listen(5001)