const fs = require('fs')
const http = require('http')
const url = require('url')

const replaceTemplate = require('./modules/replaceTemplate')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
)
const card = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const productPage = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  'utf-8'
)
const allProducts = JSON.parse(data)

const server = http.createServer((req, res) => {
  const urlObject = url.parse(req.url, true)

  const query = urlObject.query
  const pathname = urlObject.pathname

  const pathName = req.url

  // overview page - all products page
  if (pathname === '/' || pathname === '/overview') {
    const cardsHTML = allProducts
      .map((product) => replaceTemplate(card, product))
      .join('')

    const result = overview.replace('{%PRODUCT_CARDS%}', cardsHTML)

    res.writeHead(200, {
      'Content-type': 'text/html',
    })
    res.end(result)

    // Product page
  } else if (pathname === '/product') {
    const product = allProducts[query.id]

    res.writeHead(200, {
      'Content-type': 'text/html',
    })

    const result = replaceTemplate(productPage, product)

    res.end(result)

    // API
  } else if (pathname === '/api') {
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
