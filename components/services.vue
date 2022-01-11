<template>
  <v-card>
    <v-card-title>
      Services
    </v-card-title>
    <v-card-text>

      <p>
        The aim of a range of services are to cover many variety of activities you may want to cover. <br>
        I will always continue my training, enabling there to be more services offered.<br>
        You can have sessions as an individual or as a couple. Your couple doesnt just have to be your husband/ wife or
        partner it can be your friend, sister, brother, sons or daughters.<br>
        It could even be Bob your next door neighbour!<br>
        The Services offered range between 30 minutes to 1 hour sessions.
      </p>

      <v-simple-table>
        <tbody>
        <tr>
          <th><h3>Individuals</h3></th>
          <th><h3>Couples</h3></th>
        </tr>
        <tr>
          <td>Personal Training</td>
          <td>Personal Training</td>
        </tr>
        <tr>
          <td>Workout Plan</td>
        </tr>
        <tr>
          <td>Online coaching</td>
          <td></td>
        </tr>
        </tbody>
      </v-simple-table>


      <h3 style="padding-top: 40px">Coming soon</h3>
      <ul>
        <li>Nutrition plan</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-col>
        <v-btn v-scroll-to="'#prices'">Prices</v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "services"
}
</script>

<style scoped>

</style>
