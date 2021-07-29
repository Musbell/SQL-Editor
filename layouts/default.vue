<template>
  <v-app dark>
    <SystemBar/>
    <AppBar/>
    <NavigationDrawer/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
import NavigationDrawer from "../components/NavigationDrawer";
import SystemBar from "../components/SystemBar";
export default {
 name: 'default',
  components: {SystemBar, NavigationDrawer, AppBar},
}
</script>
<style>
body {
  font-size: 0.9em;
}
</style>
