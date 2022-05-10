const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const allProducts = JSON.parse(data)

const server = http.createServer((req, res) => {
  console.log(req.url)

  const pathName = req.url

  if (pathName === '/' || pathName === '/overview') {
    res.end('caught you on the overview page')
  } else if (pathName === '/product') {
    res.end('Welcome to the product page')
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    })
    res.end(data)
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
