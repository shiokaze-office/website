import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCxWeezNfUlaG2bDgvDpwpf3K_hsbzk5oA',
    libraries: 'places'
  }
})
