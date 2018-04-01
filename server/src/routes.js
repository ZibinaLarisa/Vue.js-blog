const Authentication = require('./controllers/Authentication')
const AuthPolicy = require('./policies/AuthPolicy')
const PostsController = require('./controllers/PostsController')

// express middleware function
module.exports = (app) => {
  app.post('/register',
    AuthPolicy.register,
    Authentication.register)

  app.post('/login',
    Authentication.login)

  app.get('/posts',
    PostsController.getPosts)

  app.post('/posts',
    PostsController.post)

  app.get('/posts/:postId',
    PostsController.showPost)

  app.put('/posts/:postId',
    PostsController.put)
}
