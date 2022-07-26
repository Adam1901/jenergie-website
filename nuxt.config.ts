import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  app: {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      titleTemplate: '%s',
      title: 'JENERGIE - Personal Trainging',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ''}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    },
  },

  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

})
