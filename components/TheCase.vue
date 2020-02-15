<template>
  <p class="the-case">
    {{ name }}
  </p>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    name: {
      type: String,
      default: 'Case☝️'
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
  .the-case {
    font-weight: bold;
    padding-bottom: .2em;
  }
</style>
