<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <panel title="Login">
        <v-card-text>
          <v-form>
            <v-text-field
              type="text"
              label="email"
              name="email"
              v-model="email"
              >
            </v-text-field>
            <br>
            <v-text-field
              type="password"
              name="password"
              label="password"
              v-model="password"
              >
            </v-text-field>
            <br>
            <div class="danger-alert" v-html="error"></div>
            <br>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="login">
            Login
           </v-btn>
        </v-card-actions>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Authentication from '@/services/Authentication'
import Panel from '@/components//Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await Authentication.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: 'posts'})
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  },

  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
