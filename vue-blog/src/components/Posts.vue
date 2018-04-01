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
            <span class="post-author">
            {{postAuthor}} - {{post.updatedAt}}
            </span><br>
            <p class="post-text">{{post.content | truncate}}
             <span class="post-more"
               @click="goTo({
                name: 'post',
                params: {
                  postId: post.id
                  }
                })">
                {{readmore}}
            </span>
          </p>
          <br>
          </div>
        </v-card-title>
          <div>
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
          <v-btn color="indigo darken-1" fab dark small
              @click="goTo({
              name: 'editPost',
              params: {
                postId: post.id
                }
              })">
              <v-icon>edit</v-icon>
            </v-btn>
          </div>
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
      postAuthor: 'test@',
      readmore: 'READ MORE'
    }
  },

  async mounted () {
    this.posts = (await PostService.getPosts()).data
    console.log(this.posts, 'posts')
  },

  filters: {
    truncate: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.split(' ').splice(0, 30).join(' ') + ' ...'
    }
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
.card__title {
  padding-bottom: 0px;
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
.post-text {
  font-size: 16px;
  margin-bottom: 0px
}
.post-author {
  color: orange;
  text-align: center;
  font-size: 16px;
}
.post-more {
  color: orange;
}
.post-more:hover {
  color: #26C6DA;
  cursor: pointer;
}

</style>
