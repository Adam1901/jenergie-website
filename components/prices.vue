<template>
  <div id="prices">
    <v-card>
      <v-card-title>
        Prices
      </v-card-title>
      <v-card-text>

        <v-simple-table>
          <tbody>
          <tr>
            <th><h3>Individuals</h3></th>
            <th><h3>30 minutes</h3></th>
            <th><h3>45 minutes</h3></th>
            <th><h3>1 hour</h3></th>
            <th><h3>Set price</h3></th>
          </tr>
          <tr>
            <td>Personal Training</td>
            <td> £40</td>
            <td> £47</td>
            <td> £60</td>
            <td> -</td>
          </tr>
          <tr>
            <td>Workout plan</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> £60</td>
          </tr>
          <tr>
            <td>Online coaching</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> £100 p/m</td>
          </tr>
          </tbody>
        </v-simple-table>

        <v-simple-table style="padding-top:40px">
          <tbody>
          <tr>
            <th><h3>Couples</h3></th>
            <th><h3>30 minutes</h3></th>
            <th><h3>45 minutes</h3></th>
            <th><h3>1 hour</h3></th>
            <th><h3>Set price</h3></th>
          </tr>
          <tr>
            <td>Personal Training</td>
            <td> £60</td>
            <td> £75</td>
            <td> £90</td>
            <td> -</td>
          </tr>
          </tbody>
        </v-simple-table>

      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "prices"
}
</script>

<style scoped>

</style>
