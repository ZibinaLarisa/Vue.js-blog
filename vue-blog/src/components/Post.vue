<template>
  <v-layout align-center justify-center>
      <v-flex xs12 sm6>
        <v-card class="post">
          <v-container fill-height fluid>
            <span class="headline">{{post.title}}</span>
          </v-container>
          <v-toolbar class="toolbar__content">
            <v-toolbar-title class="post-author">by  {{ transformEmail(post.author) }} - {{ transformDate(post.updatedAt) }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="indigo darken-1" fab dark small
            v-if="UserLoggedIn"
              @click="goTo({
              name: 'editPost',
              params: {
                postId: post._id
                }
              })">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn color="orange" fab dark small
            v-if="UserLoggedIn"
              @click="deletePost(post._id)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-media
            class="white--text"
            height="400px"
            :src="post.imageUrl"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">
              </span><br>
              <p class="post-text">{{post.content}}</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import PostService from '@/services/Postservices'
import { transformDate, transformEmail } from '../helpers'

export default {
  data () {
    return {
      post: {}
    }
  },
  async mounted () {
    const postId = this.$store.state.route.params.postId
    this.post = (await PostService.showPost(postId)).data
    console.log(this.post)
  },
  computed: {
    UserLoggedIn: function () {
      return this.$store.state.isUserLoggedIn
    }
  },
  methods: {
    transformDate,
    transformEmail
  }
}
</script>

<style scoped>

.toolbar__content {
  height: 50px;
  background-color: white;
  margin-bottom: 5px;
  box-shadow: none;
}

</style>
