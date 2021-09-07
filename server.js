const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  /* ============ Sending a Response - 3 steps ============= */
  // set header content type
  res.setHeader('Content-Type', 'text/plain')
  // write the response
  res.write('hello world, this is the response')
  // end the response, which then sends it to the browser
  res.end()
})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})
