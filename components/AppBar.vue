<template>
  <v-app-bar
    background-color="#272727"
    :clipped-left="clipped"
    fixed
    flat
    dense
    app
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-btn
      icon
      @click.stop="mini = !mini"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" class="mr-5"/>
    <Tab/>
  </v-app-bar>
</template>

<script>
import Tab from "./Tab";
export default {
  name: "AppBar",
  components: {Tab},
  data () {
    return {
      clipped: true,
      title: 'SQL Editor',
      mini: false,
    }
  }
}
</script>
