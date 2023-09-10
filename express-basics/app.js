const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
  res.json(products)
})


app.listen(5001, () => {
  console.log('server on 5001')
})