
const Post = require('../models/Post')

module.exports = {
  // read all posts
  async getPosts (req, res) {
    await Post.find({}, (err, posts) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(posts)
      }
    })
  },
  // show single post
  async showPost (req, res) {
    await Post.findById(req.params.postId, (err, post) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(post)
      }
    })
  },
  // create a post
  async post (req, res) {
    await Post.create(req.body, (err, post) => {
      if (err) {
        return res.status(500).send(err)
      } else {
        return res.send(post)
      }
    }).sort({ _id: -1 })
  },
  // update a post
  async put (req, res) {
    await Post.findByIdAndUpdate(
      req.params.postId,
      req.body,
      { new: true },
      (err, post) => {
        if (err) {
          return res.status(500).send(err)
        } else {
          return res.send(post)
        }
      }
    )
  },
  // => delete single post
  async delete (req, res) {
    await Post.findByIdAndRemove(req.params.postId, (err, post) => {
      if (err) {
        return res.status(500).send(err)
      } else {
        const response = {
          message: 'Post successfully deleted',
          id: post._id
        }
        return res.status(200).send(response)
      }
    })
  }
}
