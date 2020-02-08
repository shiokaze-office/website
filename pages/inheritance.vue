<template>
  <div class="container">
    <Inheritance />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Inheritance from '~/components/Inheritance.vue'

export default createComponent({
  components: {
    Inheritance
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
