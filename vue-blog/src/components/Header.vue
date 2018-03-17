<template>
   <v-toolbar fixed dark color="primary">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title class="white--text">Vue Blog</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat dark
      @click="goTo({name: 'login'})">
        Log in
    </v-btn>
    <v-btn flat dark
      @click="goTo({name: 'register'})">
        Sign up
    </v-btn>
    <!-- <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>

<script>

export default {

  methods: {
    goTo (route) {
      this.$router.push(route)
    }
  }

}
</script>

<style scoped>

</style>
