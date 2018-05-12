
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: {
      type: String,
      unique: true
    },
    content: {
      type: String
    },
    category: {
      type: String
    },
    imageUrl: {
      type: String
    },
    author: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
