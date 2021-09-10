const Blog = require('../models/blog')

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => console.log(err))
}

const blog_details = (req, res) => {
  // to first extract the id
  const id = req.params.id
  // retrieve the blog from the db using the id
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Read All' })
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Blog Not Found' })
    })
}

const blog_create_get = (req, res) => {
  res.render('create', { title: 'New Blog' })
}

const blog_create_post = (req, res) => {
  // passing the form data to the Blog document
  const blog = new Blog(req.body)

  blog
    .save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.log(err))
}

const blog_delete = (req, res) => {
  const id = req.params.id

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' })
    })
    .catch((err) => console.log(err))
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
}
