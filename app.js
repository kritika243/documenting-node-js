const expres = require('express')

const app = expres()

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/blogs/create', (req, res) => {
  res.render('create')
})

// 404 page
app.use((req, res) => {
  // we cam chain like this because res.status() also retuens res object
  res.status(404).render('404')
})
