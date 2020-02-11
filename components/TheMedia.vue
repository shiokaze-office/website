<template>
  <div class="the-media">
    <the-img :path="name" :alt="alt" :caption="caption" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import TheImg from '~/components/TheImg.vue'

export default createComponent({
  components: {
    TheImg
  },
  props: {
    name: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    caption: {
      type: String
    }
  },
  setup () {
    return { }
  }
})
</script>

<style scoped>
</style>
