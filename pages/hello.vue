<template>
  <div class="container">
    <Hello />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Hello from '~/components/Hello.vue'

export default createComponent({
  components: {
    Hello
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
