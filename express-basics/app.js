const express = require('express')
const logger = require('./logger')
const app = express()


app.use(logger)

app.get('/', (req, res) => {
  res.send('home')
})
app.get('/about', (req, res) => {

  res.send('about')
})



app.listen(5001, () => {
  console.log('server on 5001')
})