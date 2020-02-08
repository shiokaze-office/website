<template>
  <div class="container">
    <FamilyTrust />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import FamilyTrust from '~/components/FamilyTrust.vue'

export default createComponent({
  components: {
    FamilyTrust
  },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
