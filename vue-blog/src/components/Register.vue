<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email"
      >
    <br>
    <input
      type="password"
      namre="password"
      placeholder="password"
      v-model="password"
      >
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'

export default {
  data () {
    return {
      email: 'test@gmail',
      password: '123',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await Authentication.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<style scoped>

.error {
  color: red
}

</style>
