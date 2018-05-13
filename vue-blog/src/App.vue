<template>
  <div id="app">
    <v-app id="inspire">
      <page-header />
      <main>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {  
  font-family: Prompt, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: red;
}
.card__title {
  padding: 10px 0px 0px 0px;
}
.container.fill-height {
  padding-left: 0
}
.post {
  padding: 5px 20px;
  min-height: 400px;
  overflow: hidden;
  border-bottom: 1px solid grey;
}
.post-author {
  color: #2a3744;  
  text-align: center;
  font-size: 16px; 
}
.post-text {
  font-size: 16px;
  margin-bottom: 0px
}
.headline {
  color: #3949AB;
  font-size: 24px;
}
.headline:hover {
  color: #26C6DA;
}

</style>
