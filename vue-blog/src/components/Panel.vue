<template>
  <div class="white elevation-2">
    <div class="pl4 pr4 pt2 pb2">
        <v-toolbar dark color="indigo">
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" />
        </v-toolbar>
      <slot>
        Content is not defined
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}

</script>

<style scoped>

</style>
