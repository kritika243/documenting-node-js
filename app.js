const expres = require('express')
const morgan = require('morgan')

const app = expres()

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

// app.use(morgan('dev'))

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Saleb likes PHP',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Aron prefers GoLang',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Jacob: How to defeat browser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ]
  res.render('index', { title: 'Home', blogs: blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'New Blog' })
})

// 404 page
app.use((req, res) => {
  // we cam chain like this because res.status() also retuens res object
  res.status(404).render('404', { title: '404' })
})
