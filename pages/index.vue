<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to Jenergie
        </v-card-title>
        <v-card-text>
          <sliders></sliders>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <aboutme></aboutme>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Aboutme from "~/components/aboutme.vue";

export default {
  components: {
    Aboutme,
    Logo,
    VuetifyLogo
  }
}
</script>
