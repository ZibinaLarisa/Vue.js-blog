import Api from '@/services/Api'

export default {
  getPosts () {
    return Api().get('posts')
  },
  addPost (post) {
    return Api().post('posts', post)
  },
  showPost (postId) {
    return Api().get(`posts/${postId}`)
  },
  // update a post
  put (post) {
    return Api().put(`posts/${post._id}`, post)
  },
  deletePost (postId) {
    return Api().delete(`posts/${postId}`)
  }
}
