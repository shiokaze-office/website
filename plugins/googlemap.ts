import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD7BFJKUOBD_2jOXVS62p5MQ2nOon2-5qo',
    libraries: 'places'
  }
})
