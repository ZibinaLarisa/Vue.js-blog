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
        <v-card-media
          class="white--text"
          height="200px"
          :src="post.imageUrl"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">
            {{postAuthor}} - {{post.updatedAt}}
            </span><br>
            <span>{{post.content}}</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
           flat
           color="orange"
           @click="goTo({
            name: 'post',
            params: {
              postId: post.id
              }
            })">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PostService from '@/services/Postservices'

export default {
  components: {
    Panel
  },

  data () {
    return {
      posts: null,
      postAuthor: 'test@'
    }
  },

  async mounted () {
    this.posts = (await PostService.getPosts()).data
    console.log(this.posts, 'posts')
  },

  methods: {

    goTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<style scoped>
.post {
  padding: 20px;
  height: 400px;
  overflow: hidden;
}
.post-title {
  font-size: 30px;
}
.post-image {
  width: 70%;
  margin: 0 auto;
}
.headline {
  color: #3949AB;
  font-size: 24px;
}
.headline:hover {
  color: #26C6DA;
}

</style>
