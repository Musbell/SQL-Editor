<template>
  <v-card flat color="#F5F5F5">
    <v-tabs
      background-color="#F5F5F5"
      grow
      center-active
      :hide-slider="true"
      active-class="active-class"
      show-arrows
    >
      <v-tab :ripple="false">
        <v-icon left small>
          mdi-file-document-outline
        </v-icon>
        One
        <v-btn
          icon
          small
          class="ml-2"
          color="grey"
        >
        <v-icon x-small>
          mdi-close
        </v-icon>
        </v-btn>
      </v-tab>
      <v-tab :ripple="false">
        <v-icon left small>
          mdi-file-document-outline
        </v-icon>
        Two
        <v-btn
          icon
          small
          class="ml-2"
          color="grey"
        >
          <v-icon x-small>
            mdi-close
          </v-icon>
        </v-btn>
      </v-tab>
      <v-tab :ripple="false">
        <v-icon left small>
          mdi-file-document-outline
        </v-icon>
        Three
        <v-btn
          icon
          small
          class="ml-2"
          color="grey"
        >
          <v-icon x-small>
            mdi-close
          </v-icon>
        </v-btn>
      </v-tab>
      <v-tab :ripple="false">
        <v-icon left small>
          mdi-file-document-outline
        </v-icon>
        Four
        <v-btn
          icon
          small
          class="ml-2"
          color="grey"
        >
          <v-icon x-small>
            mdi-close
          </v-icon>
        </v-btn>
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
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

  }
</style>
