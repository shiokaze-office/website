<template>
  <div>
    <div class="container">
      <Office />
    </div>
    <Map />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Office from '~/components/Office.vue'
import Map from '~/components/Map.vue'

export default createComponent({
  components: {
    Office,
    Map
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
