const express = require('express')
const Blog = require('../models/blog')
const router = express.Router()

// blog routes
router.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'New Blog' })
})

router.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => console.log(err))
})

router.post('/blogs', (req, res) => {
  // passing the form data to the Blog document
  const blog = new Blog(req.body)

  blog
    .save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.log(err))
})

router.get('/blogs/:id', (req, res) => {
  // to first extract the id
  const id = req.params.id
  // retrieve the blog from the db using the id
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Read All' })
    })
    .catch((err) => console.log(err))
})

router.delete('/blogs/:id', (req, res) => {
  const id = req.params.id

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' })
    })
    .catch((err) => console.log(err))
})

module.exports = router
