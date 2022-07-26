<template>
  <v-app dark>
    <v-app-bar fixed app>
      <img class="mr-3" src="/jenergie-logo.svg" height="40" alt="Jenergie Logo"/>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>
    <v-footer app>
      <span class="nav-item">&copy; Jenergie - Jenni Meadows {{ new Date().getFullYear() }}</span>
      <span class="nav-item">Website by Adam Meadows</span>
    </v-footer>
  </v-app>
</template>

<script setup>

</script>

<style>
.nav-item {
  padding-right: 10px;
}

.v-application p {
  margin-bottom: 16px;
}

.v-card-title headline {
  font-size: 24px;
}
</style>
