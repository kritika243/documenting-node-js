const expres = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const { render } = require('ejs')

const app = expres()

// for connection to mongodb
const dbURI =
  'mongodb+srv://user_K:thisisatestpassword@clusterblogop.ujaxl.mongodb.net/BlogOP?retryWrites=true&w=majority'

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs')

// app.use(morgan('dev'))

/*============ Middleware and static files ==============*/
// we are telling that "public" is the folder that has been made public to the browser
app.use(expres.static('public'))

// to get the req.body on form submission on the frontend
app.use(expres.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

// blog routes

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'New Blog' })
})

app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => console.log(err))
})

app.post('/blogs', (req, res) => {
  // passing the form data to the Blog document
  const blog = new Blog(req.body)

  blog
    .save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.log(err))
})

app.get('/blogs/:id', (req, res) => {
  // to first extract the id
  const id = req.params.id
  // retrieve the blog from the db using the id
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Read All' })
    })
    .catch((err) => console.log(err))
})

// 404 page
app.use((req, res) => {
  // we cam chain like this because res.status() also retuens res object
  res.status(404).render('404', { title: '404' })
})
