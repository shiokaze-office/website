<template>
  <div>
    <div class="container">
      <About />
    </div>
    <Map />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import About from '~/components/About.vue'
import Map from '~/components/Map.vue'

@Component({
  components: {
    About,
    Map
  }
})
export default class PageIndex extends Vue {
  private head () {
    return {
      title: '行政書士 しおかぜ事務所',
      titleTemplate: '%s'
    }
  }
}
</script>

<style>
</style>
