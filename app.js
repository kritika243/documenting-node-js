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
