<template>
  <v-card flat color="#F5F5F5">
    <v-tabs
      background-color="#F5F5F5"
      grow
      center-active
      :hide-slider="true"
      active-class="active-class"
      class="mt-4"
    >
      <v-tab :ripple="false">
        One
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
      <v-tab :ripple="false">
        Two
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
      <v-tab :ripple="false">
        Three
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
      <v-tab :ripple="false">
        Four
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
      <v-tab :ripple="false">
        Five
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
      <v-tab :ripple="false">
        Six
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
      <v-tab :ripple="false">
        Seven
        <v-icon right x-small>
          mdi-close
        </v-icon>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "Tab"
}
</script>
<style scoped>
  .active-class {
    background: white;
  }
</style>
