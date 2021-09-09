const expres = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = expres()

// for connection to mongodb
const dbURI =
  'mongodb+srv://user_K:thisisatestpassword@clusterblogop.ujaxl.mongodb.net/BlogOP?retryWrites=true&w=majority'

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

// app.use(morgan('dev'))

/*============ Middleware and static files ==============*/
// we are telling that "public" is the folder that has been made public to the browser
app.use(expres.static('public'))

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
