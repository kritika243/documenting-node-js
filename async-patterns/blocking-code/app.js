const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') res.end('Home page')
  if (req.url === '/about') {
    // BLOCKING CODE !! blocks all routes
    for (let i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) console.log('running loops')
    }
    res.end('About Page')
  }
})

server.listen(3000, (err) => {
  if (err) console.log(err)
  console.log('listening on port 3000')
})
