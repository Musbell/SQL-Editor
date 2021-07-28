<template>
  <v-app-bar
    background-color="#272727"
    :clipped-left="clipped"
    fixed
    flat
    app
  >
    <v-toolbar-title v-text="title" class="mr-5"/>
    <Tab/>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data () {
    return {
      clipped: true,
      title: 'SQL Editor'
    }
  }
}
</script>
