const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Home page </h1> <a href="/api/products" > Products </a> ')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((p) => {
    const { id, name, image } = p
    return { id, name, image }
  })
  res.json(newProducts)
})

// params
app.get('/api/products/:productID', (req, res) => {
  const singleProduct = products.find((p) => p.id === Number(req.params.productID))
  if (!singleProduct) {
    return res.status(404).send('Product not found')
  }
  return res.json(singleProduct)
})


app.listen(5001, () => {
  console.log('server on 5001')
})