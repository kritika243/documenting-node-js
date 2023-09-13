const express = require('express')
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()


// app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('home')
})
app.get('/about', (req, res) => {
  res.send('about')
})



app.listen(5001, () => {
  console.log('server on 5001')
})