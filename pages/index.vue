<template>
  <div>
    <div class="container">
      <About />
    </div>
    <Map />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import About from '~/components/About.vue'
import Map from '~/components/Map.vue'

export default createComponent({
  components: {
    About,
    Map
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
