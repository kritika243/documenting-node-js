const http = require('http')


const { readFileSync } = require('fs')

const home = readFileSync('./index.html')
const navPage = readFileSync('././navbar-app/index.html')
const navStyles = readFileSync('././navbar-app/styles.css')
const navImg = readFileSync('././navbar-app/logo.svg')
const navJS = readFileSync('././navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, { "content-type": 'text/html' })
    res.write(home)
    res.end()
  }
  else if (url === '/nav') {
    res.writeHead(200, { "content-type": 'text/html' })
    res.write(navPage)
    res.end()
  }
  // nav styles
  else if (url === '/styles.css') {
    res.writeHead(200, { "content-type": 'text/css' })
    res.write(navStyles)
    res.end()
  }
  // nav logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { "content-type": 'image/svg+xml' })
    res.write(navImg)
    res.end()
  }
  // nav js
  else if (url === '/browser-app.js') {
    res.writeHead(200, { "content-type": 'text/javascript' })
    res.write(navJS)
    res.end()
  }
  else if (url === '/about') {
    res.writeHead(200, { "content-type": 'text/html' })
    res.write('<h1>About page</h1>')
    res.end()
  }
  else {
    res.writeHead(404, { "content-type": 'text/html' })
    res.write('<h1>Page Not Found</h1>')
    res.end()
  }
})



server.listen(5001)