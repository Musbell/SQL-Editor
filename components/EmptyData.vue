<template>
  <v-row justify="center" align="center">
    <v-col class="emptyData">
      <img width="200" src="~/assets/images/no-query.png"/>
      <p class="title grey--text">Welcome! Select query to get started.</p>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'EmptyData',
}
</script>
<style scoped>
.emptyData {
  text-align: center;
  margin-top: 50px;
}
</style>
