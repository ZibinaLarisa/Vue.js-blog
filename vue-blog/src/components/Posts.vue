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
            by  {{post.author}} - {{post.updatedAt | transformDate }}
        </span><br>
        <v-card-media
          class="white--text"
          height="200px"
          :src="post.imageUrl"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <p class="post-text">{{post.content | truncate}}
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
          <div>
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
    getpostAuthor: function () {
      return this.$store.getters.getEmail
    }
  },

  methods: {
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
  },

  filters: {
    truncate: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.split(' ').splice(0, 30).join(' ') + ' ...'
    },
    transformDate: function (date) {
      if (!date) return ''
      return new Date(date).toString().split(' ').slice(0, 4).join(' ').replace(/( \d+)$/, ',$1')
    }
  }
}

</script>

<style scoped>
.post {
  padding: 5px 20px;
  min-height: 400px;
  overflow: hidden;
  border-bottom: 1px solid grey;
}
.card__title {
  padding: 10px 0px 0px 0px;
}
.post-image {
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
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
  color: #2a3744;  
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
.container.fill-height {
  padding-left: 0
}

</style>
