 <template>
  <v-layout class="mt-5">
    <v-flex xs5>
      <panel title="Adding Title" >
        <v-card-text class="pl-4">
          <v-text-field
            label="title"
            required
            :rules ="[required]"
            v-model="post.title">
          </v-text-field>
          <v-text-field
            label="category"
            v-model="post.category">
          </v-text-field>
          <v-text-field
            label="add Image url"
            v-model="post.imageUrl">
          </v-text-field>
        </v-card-text>
      </panel>
    </v-flex>
    <v-flex xs7>
      <panel title="Adding Content" class="ml-4">
        <v-card-text class="pl-4">
          <v-text-field
            label="content"
            multi-line
            v-model="post.content">
          </v-text-field>
        </v-card-text>
        <v-btn
            color="primary"
            @click="savePost()">
            Save Post
        </v-btn>
      </panel>
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
      post: {
        title: null,
        content: null,
        category: null,
        image: null
      },
      postId: '',
      required: (value) => !!value || 'Required'
    }
  },

  created () {
    this.postId = this.$store.state.route.params.postId
    console.log(this.postId)
  },

  methods: {
    async savePost () {
      try {
        await PostService.put(this.post)
        this.$router.push(
          {name: 'post',
            params: {
              postId: this.postId
            }})
      } catch (err) {
        console.log(err)
      }
    }
  },

  async mounted () {
    try {
      this.post = (await PostService.showPost(this.postId)).data
    } catch (err) {
      console.log(err)
    }
  }

}

</script>

<style scoped>

</style>
