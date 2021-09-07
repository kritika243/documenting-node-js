const expres = require('express')

const app = expres()

// listen for request
app.listen(3000)

app.get('/', (req, res) => {
  // res.send('<p>home page</p>')
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>')
  res.sendFile('./views/about.html', { root: __dirname })
})

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404 page
// if the code reaches upto this point, that is no match for requested url, the use function then sends the 404.html file
app.use((req, res) => {
  // we cam chain like this because res.status() also retuens res object
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})
