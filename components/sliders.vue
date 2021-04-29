<template>
  <v-carousel v-model="model">

    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition">

        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "sliders",
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
      ]
  }),
}
</script>

<style scoped>

</style>
