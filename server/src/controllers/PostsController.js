const {Post} = require('../models')

module.exports = {
  async getPosts (req, res) {
    try {
      const posts = await Post.findAll({
        limit: 10
      })
      res.send(posts)
      console.log(posts)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the posts'
      })
    }
  },
  async showPost (req, res) {
    try {
      const post = await Post.findById(req.params.postId)
      res.send(post)
      console.log(post)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the post'
      })
    }
  },
  async post (req, res) {
    try {
      const post = await Post.create(req.body)
      res.send(post)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a post'
      })
    }
  },
  async put (req, res) {
    try {
      await Post.update(req.body, {
        where: {
          id: req.params.postId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update a post'
      })
    }
  }
}
