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
            <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
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
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
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
                <v-btn
                  fab
                  dark
                  x-small
                  color="primary"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-toolbar-title>
        </v-toolbar>
        <v-treeview
          activatable
          dense
          :items="links"
        ></v-treeview>
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
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      links: [
        {
          id: 1,
          name: 'My queries :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Draft :',
          children: [
            { id: 6, name: 'Calendar : app' },
            { id: 7, name: 'Chrome : app' },
            { id: 8, name: 'Webstorm : app' },
          ],
        },
      ],
      miniVariant: false,
    }
  }
}
</script>
