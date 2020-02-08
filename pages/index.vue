<template>
  <div class="container">
    <About />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import About from '~/components/About.vue'

export default createComponent({
  components: {
    About
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
