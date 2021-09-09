const mongoose = require('mongoose')
const Schema = mongoose.Schema

// defining a schema- which defines thestructure of our document
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// then we define a model based on the above schema
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
