<template>
  <div class="container">
    <NotarialDeed />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import NotarialDeed from '~/components/NotarialDeed.vue'

export default createComponent({
  components: {
    NotarialDeed
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
