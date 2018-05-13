<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <v-card
        class="post"
        v-for="post in posts"
        :key="post.id">
        <v-container fill-height fluid>
          <span class="headline">{{post.title}}</span>
        </v-container>
        <span class="post-author">
            by  {{ transformEmail(post.author) }} - {{ transformDate(post.updatedAt) }}
        </span><br>
        <v-card-media
          class="white--text"
          height="250px"
          :src="post.imageUrl"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <p class="post-text">{{ truncate(post.content) }}
             <span class="post-more"
               @click="goTo({
                name: 'post',
                params: {
                  postId: post._id
                  }
                })">
                READ MORE
            </span>
          </p>
          <br>
          </div>
        </v-card-title>
          <div
            v-if="UserLoggedIn">
            <v-btn color="indigo darken-1" fab dark small
              @click="goTo({
              name: 'editPost',
              params: {
                postId: post._id
                }
              })">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn color="orange" fab dark small
              @click="deletePost(post._id)">
              <v-icon>delete</v-icon>
            </v-btn>
          </div>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PostService from '@/services/Postservices'
import { transformDate, truncate, transformEmail } from '../helpers'

export default {
  components: {
    Panel
  },

  data () {
    return {
      posts: [],
      postAuthor: null
    }
  },

  mounted () {
    this.getPosts()
  },

  computed: {
    UserLoggedIn: function () {
      return this.$store.state.isUserLoggedIn
    }
  },

  methods: {
    truncate,
    transformDate,
    transformEmail,
    async getPosts () {
      const response = await PostService.getPosts()
      this.posts = response.data
      console.log(this.posts, 'posts')
    },
    async deletePost (id) {
      await PostService.deletePost(id)
      console.log(id)
      this.getPosts()
    },
    goTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.post-image {
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
}
.post-more {
  color: orange;
}
.post-more:hover {
  color: #26C6DA;
  cursor: pointer;
}
</style>
