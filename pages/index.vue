<template>
  <div>
    <div class="container">
      <Logo />
      <About />
    </div>
    <Map />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import About from '~/components/About.vue'
import Map from '~/components/Map.vue'

@Component({
  components: {
    Logo,
    About,
    Map
  }
})
export default class PageIndex extends Vue {
  private head() {
    return {
      title: '行政書士 しおかぜ事務所',
      titleTemplate: '%s'
    }
  }
}
</script>

<style>
</style>
