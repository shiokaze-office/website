<template>
  <header>
    <Logo tag="h1" vh="vertical" />
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'

export default createComponent({
  components: {
    Logo
  },
  setup () {
    return { }
  }
})

</script>

<style scoped>
</style>
