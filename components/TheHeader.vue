<template>
  <header>
    <TheNav />
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import TheNav from '~/components/TheNav.vue'

export default createComponent({
  components: {
    TheNav
  },
  setup () {
    return { }
  }
})

</script>

<style scoped>
</style>
