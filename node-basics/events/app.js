
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name) => {
  console.log(`data received, hi ${name}`)
})
customEmitter.on('response', () => {
  console.log(`some other logic`)
})

customEmitter.emit('response', 'john')