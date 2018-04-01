import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddPost from '@/components/AddPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:postId',
      name: 'post',
      component: Post
    },
    {
      path: '/posts/add',
      name: 'addPost',
      component: AddPost
    },
    {
      path: '/posts/:postId/edit',
      name: 'editPost',
      component: EditPost
    }
  ]
})
