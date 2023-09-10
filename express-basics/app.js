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


// query string params
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((p) => {
      return p.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({
      message: 'No products match the search',
      data: []
    })
  }
  res.status(200).json(sortedProducts)
})


app.listen(5001, () => {
  console.log('server on 5001')
})