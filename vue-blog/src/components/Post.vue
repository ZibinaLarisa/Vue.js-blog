<template>
  <v-layout align-center justify-center>
      <v-flex xs12 sm6>
        <v-card class="post">          
          <v-container fill-height fluid>
            <span class="headline">{{post.title}}</span>
          </v-container>
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
              <span>{{post.content}}</span><br>
            </div>
          </v-card-title>         
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import PostService from '@/services/Postservices'

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
  }
}
</script>

<style scoped>

</style>
