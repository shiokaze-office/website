<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default createComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
