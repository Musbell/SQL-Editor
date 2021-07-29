<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    width="27%"
  >
    <v-row
      class="fill-height"
      no-gutters
    >
      <v-navigation-drawer
        mini-variant
        mini-variant-width="56"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://avatars.githubusercontent.com/u/4477954?v=4"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
          >
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-action
                  v-bind="attrs"
                  v-on="on">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-list class="grow">
        <v-toolbar flat>
          <v-toolbar-title class="mt-4">
            <v-row>
              <v-col sm="9">
                <v-text-field
                  placeholder="Filter queries"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="3">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      fab
                      dark
                      small
                      color="primary"
                    >
                      <v-icon dark>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>New query</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-toolbar-title>
        </v-toolbar>
        <v-treeview
          activatable
          hoverable
          open-all
          dense
          :items="links"
        >
          <template v-slot:prepend="{ item, open }">
            <v-icon v-if="item.parent">
              {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
            </v-icon>
            <v-icon v-else>
              mdi-file-document-outline
            </v-icon>
          </template>
          <template v-slot:append="{ item }">
            <v-btn
              icon
              color="pink"
            >
            <v-icon v-if="!item.parent" small>
              mdi-delete
            </v-icon>
            </v-btn>
          </template>
        </v-treeview>
      </v-list>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-file-document-outline',
          title: 'Queries',
          to: '/'
        },
        {
          icon: 'mdi-database',
          title: 'Schema',
          to: '/inspire'
        }
      ],
      links: [
        {
          id: 1,
          name: "My queries :",
          parent: true,
          children: [
            { id: 2, name: 'One' },
            { id: 3, name: 'Two' },
          ],
        },
      ],
      miniVariant: false,
    }
  }
}
</script>
