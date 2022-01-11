<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <img class="mr-3" src="/jenergie-logo.svg" height="40" alt="Jenergie Logo"/>
      <v-spacer/>
      <v-switch v-model="$vuetify.theme.dark" label="Dark mode"></v-switch>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span class="nav-item">&copy; Jenergie - Jenni Meadows {{ new Date().getFullYear() }}</span>
      <span class="nav-item">Website by Adam Meadows</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'JENERGIE'
    }
  }
}
</script>
<style scoped>
.nav-item {
  padding-right: 10px;
}
</style>
