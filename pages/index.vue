<template>
  <v-row justify="center" align="center">
<!--    <Tab/>-->
    <v-col cols="12">
      <v-row>
        <v-col cols="12" sm="10" md="10">
          <v-text-field
            v-model="title"
            label="One"
            prepend-inner-icon="mdi-file-document-outline"
            placeholder="Placeholder"
            solo
            flat
            dense
            class="ml-5 font-weight-medium title"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                color="success"
              >
                <v-icon>mdi-play</v-icon>
                Run
              </v-btn>
            </template>
            <span>Run query</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                icon
              >
                <v-icon>mdi-dock-left</v-icon>
              </v-btn>
            </template>
            <span>Toggle panel</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" style="margin-top: -30px">
      <v-divider class="mb-3"/>
      <multipane class="foo" layout="horizontal">
        <textarea v-model="content" id="editor"></textarea>
        <multipane-resizer></multipane-resizer>
        <Banner/>
        <Table/>
      </multipane>
    </v-col>
  </v-row>
</template>
<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import Table from "../components/Table";
import Banner from "../components/Banner";
let CodeMirror;
if(process.client) {
  CodeMirror = require('codemirror')
  require('codemirror/lib/codemirror.css')
  require('codemirror/mode/sql/sql')
  require('codemirror/theme/neo.css')
  require('codemirror/addon/selection/active-line')
}
export default {
  name: 'Index',
  components: {
    Banner,
    Table,
    Multipane,
    MultipaneResizer
  },
  data: () => ({
    title: 'My first query',
    content: 'select * from  users'
  }),
  mounted() {
    CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'neo',
      mode: 'sql',
      lineWrapping: true,
      styleActiveLine: { nonEmpty: true },
      styleActiveSelected: true,
    })
  }
}
</script>
<style scoped>
.multipane.foo.layout-h .multipane-resizer {
  margin: 0; top: 0; /* reset default styling */
  height: 5px;
  border-radius: 5px;
  background: #EEE;
}
.multipane.foo.layout-v .multipane-resizer {
  margin: 3px; left: 3px; /* reset default styling */
  width: 5px;
  height: 500px;
  border-radius: 5px;
  background: #EEE;
}
</style>
