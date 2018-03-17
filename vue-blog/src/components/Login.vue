<template>
  <v-layout align-center justify-center>
    <v-flex xs6 offset-xs3>
       <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
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
                type="text"
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
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Authentication from '@/services/Authentication'

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
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<style scoped>

</style>
