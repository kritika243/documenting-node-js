const http = require('http')


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to home page ')
  }
  else if (req.url === '/about') {
    res.end('Welcome to about page ')
  }
  else res.end(`
  <h1>Oops this page does not exist</h1>
  <h4>Go back to <a href="/" >home page</a> </h4>
  `)
})



server.listen(5001)