<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        <div class="text-center">
          <logo/>
        </div>
        <v-card>
          <v-card-title class="headline">
            Welcome to Jenergie
          </v-card-title>

        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <aboutme></aboutme>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <services></services>
      </v-col>
    </v-row>
    <v-row v-if="false">
      <v-col>
        <gallery></gallery>
      </v-col>
    </v-row>
    <v-row v-if="false">
      <v-col>
        <testimonals></testimonals>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <prices></prices>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <contact></contact>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Aboutme from "~/components/aboutme.vue";
import Services from "~/components/services";
import Gallery from "~/components/gallery";

export default {
  components: {
    Gallery,
    Services,
    Aboutme,
    Logo,
    VuetifyLogo
  }
}
</script>
