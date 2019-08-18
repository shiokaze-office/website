<template>
  <section class="map">
    <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options">
      <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div class="gmap--infowin">
          <p class="gmap--infotext">{{infoContent.title}}</p>
        </div>
      </GmapInfoWindow>
      <GmapMarker v-for="(m, index) in markers" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false"></GmapMarker>
    </GmapMap>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Info {
  title: string
}

interface Location {
  lat: number
  lng: number
}

interface Marker {
  position: Location
  content: Info
}

const styles = require('~/static/googlemap-style.json')
const office: Location = { lat: 33.5863496, lng: 130.3116807 }
const info: Info = { title: 'しおかぜ事務所' }

@Component
export default class Map extends Vue {
  public center = office
  public zoom = 15
  public options = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true,
    disableDefaultUi: true,
    styles: styles
  }
  public infoWinOpen = false
  public infoWindowPos = office
  public infoContent = info
  public infoOptions = {
    pixelOffset: { width: 0, height: -50 }
  }

  public toggleInfoWindow(marker: Marker, id: number) {
    this.infoWinOpen = false
    this.infoWindowPos = marker.position
    this.infoContent = marker.content
    this.infoWinOpen = true
  }

  public data() {
    return {
      center: office,
      markers: [
        { position: office, content: this.infoContent }
      ]
    }
  }

  public getMarkerIcon() {
    return {
      url: require(`~/static/googlemap-marker.svg`),
      size: {width: 100, height: 100, f: 'px', b: 'px'},
      scaledSize: {width: 100, height: 100, f: 'px', b: 'px'}
    }
  }
}
</script>

<style scoped>
.vue-map-container {
  margin: 2em 0;
  width: 100%;
  height: 500px;
}
.gmap--infowin {
  font-size: 1.2em;
  padding: 1em;
  font-weight: bold;
}
</style>
