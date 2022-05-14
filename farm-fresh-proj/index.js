const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
)
const card = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const product = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const allProducts = JSON.parse(data)

const replaceTemplate = (template, product) => {
  let result = template.replace(/{%PRODUCTNAME%}/g, product.productName)
  result = result.replace(/{%IMAGE%}/g, product.image)
  result = result.replace(/{%PRICE%}/g, product.price)
  result = result.replace(/{%FROM%}/g, product.from)
  result = result.replace(/{%NUTRIENTS%}/g, product.nutrients)
  result = result.replace(/{%QUANTITY%}/g, product.quantity)
  result = result.replace(/{%DESCRIPTION%}/g, product.description)
  result = result.replace(/{%ID%}/g, product.id)
  if (!product.organic)
    result = result.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

  return result
}

const server = http.createServer((req, res) => {
  console.log(req.url)

  const pathName = req.url

  // overview page - all products page
  if (pathName === '/' || pathName === '/overview') {
    const cardsHTML = allProducts
      .map((product) => replaceTemplate(card, product))
      .join('')
    console.log(cardsHTML)

    const result = overview.replace('{%PRODUCT_CARDS%}', cardsHTML)

    res.writeHead(200, {
      'Content-type': 'text/html',
    })
    res.end(result)

    // Product page
  } else if (pathName === '/product') {
    res.end('Welcome to the product page')

    // API
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    })
    res.end(data)

    // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'helloooo',
    })
    res.end('<h3>404 page, page not found</h3>')
  }
})

server.listen(3000, '127.0.0.1', () => {
  console.log('listening to request on port 3000')
})
