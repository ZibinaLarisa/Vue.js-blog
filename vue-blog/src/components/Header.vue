<template>
   <v-toolbar fixed dark color="indigo darken-1">
    <v-toolbar-title class="white--text">
      <v-btn flat dark
        @click="goTo({name: 'posts'})">
          Vue Blog
      </v-btn>
    </v-toolbar-title>
    <v-btn flat dark
      v-if="UserLoggedIn"
      @click="goTo({name: 'addPost'})">
        Add Post
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat dark
      v-if="!UserLoggedIn"
      @click="goTo({name: 'login'})">
        Log in
    </v-btn>
    <v-btn flat dark
      v-if="!UserLoggedIn"
      @click="goTo({name: 'register'})">
        Sign up
    </v-btn>
    <v-btn flat dark
      v-if="UserLoggedIn"
      @click="logout">
        Log Out
    </v-btn>
  </v-toolbar>
</template>

<script>

export default {

  computed: {
    UserLoggedIn: function () {
      return this.$store.state.isUserLoggedIn
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setToken', null)
      this.$router.push({name: 'posts'})
    },

    goTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<style scoped>

</style>
