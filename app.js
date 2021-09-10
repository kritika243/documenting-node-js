const expres = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const { render } = require('ejs')
const blogRoutes = require('./routes/blogRoutes')

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
app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res) => {
  // we cam chain like this because res.status() also retuens res object
  res.status(404).render('404', { title: '404' })
})
