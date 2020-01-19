<template>
  <section class="map">
    <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options">
      <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div class="gmap--infowin">
          <p class="gmap--infotext">
            {{ infoContent.title }}
          </p>
        </div>
      </GmapInfoWindow>
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(m)"
      />
    </GmapMap>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

interface Info {
  title: string
}

interface Location {
  lat: number,
  lng: number
}

interface Marker {
  position: Location,
  content: Info
}

interface Position {
  width: number,
  height: number
}

interface Options {
  zoomControl: boolean,
  mapTypeControl: boolean,
  scaleControl: boolean,
  streetViewControl: boolean,
  rotateControl: boolean,
  fullscreenControl: boolean,
  disableDefaultUi: boolean,
  styles: Object
}

interface InfoOptionsOffset {
  width: number,
  height: number
}

interface InfoOptions {
  pixelOffset: InfoOptionsOffset
}

const styles: any = require('~/static/googlemap-style.json')
const office: Location = {
  lat: 33.5863496,
  lng: 130.3116807
}
const info: Info = { title: 'しおかぜ事務所' }

export default createComponent({
  props: {
    center: {
      type: Object as () => Location,
      default: office
    },
    zoom: {
      type: Object as () => number,
      default: 15
    },
    options: {
      type: Object as () => Options,
      default: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: true,
        styles
      }
    },
    infoOptions: {
      type: Object as () => InfoOptions,
      default: {
        pixelOffset: { width: 0, height: -50 }
      }
    },
    infoWindowPos: {
      type: Object as () => Location,
      default: office
    },
    infoWinOpen: {
      type: Object as () => boolean,
      default: false
    },
    infoContent: {
      type: Object as () => Info,
      default: info
    }
  },
  setup ({ infoWindowPos, infoWinOpen, infoContent, infoOptions }) {
    function toggleInfoWindow (m: Marker) {
      infoWinOpen = false
      infoWindowPos = m.position
      infoContent = m.content
      infoWinOpen = true
    }

    return {
      center: office,
      markers: [
        { position: office, content: infoContent }
      ],
      toggleInfoWindow,
      infoWindowPos,
      infoWinOpen,
      infoOptions
    }
  }
})
</script>

<style scoped>
.vue-map-container {
  margin: 2em 0;
  width: 100%;
  height: 500px;
}
.gmap--infowin {
  font-size: 1em;
  padding: 1em;
  font-weight: bold;
}
.gmap--infotext {
  padding-bottom: 0;
}

@media (max-width: 600px) {
  .vue-map-container {
    height: 300px;
  }
}
</style>
