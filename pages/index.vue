<template>
  <v-row justify="center" align="center">
<!--    <Tab/>-->
    <v-col cols="12">
      <v-row>
        <v-col cols="12" sm="10" md="10">
          <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            outlined
            dense
            full-width
            class="ml-5"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <v-btn
            depressed
            color="success"
          >
            <v-icon>mdi-play</v-icon>
            Run
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" style="margin-top: -40px">
      <textarea v-model="content" id="editor"></textarea>
    </v-col>
  </v-row>
</template>
<script>
let CodeMirror;
if(process.client) {
  CodeMirror = require('codemirror')
  require('codemirror/lib/codemirror.css')
  require('codemirror/mode/sql/sql')
  require('codemirror/theme/neo.css')
}
export default {
  name: 'Index',
  data: () => ({
    content: 'let a = 0'
  }),
  mounted() {
    CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'neo',
      mode: 'sql'
    })
  }
}
</script>
