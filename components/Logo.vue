<template>
  <component :is="tag" class="logo">
    <nuxt-link to="/">
      <img :class="vh" :src="imageUrl" alt="行政書士 しおかぜ事務所">
    </nuxt-link>
  </component>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    vh: {
      type: String,
      default: 'weave'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  setup ({ vh }) {
    const imageUrl = require(`~/assets/img/shiokaze-logo-${vh}.svg`)
    return { imageUrl }
  }
})
</script>

<style scoped>
.weave {
  margin: 0.5rem 0.75rem;
  width: 8rem;
}
</style>
