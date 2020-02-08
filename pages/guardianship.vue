<template>
  <div class="container">
    <Guardianship />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Guardianship from '~/components/Guardianship.vue'

export default createComponent({
  components: {
    Guardianship
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
