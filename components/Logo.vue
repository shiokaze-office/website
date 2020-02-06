<template>
  <component :is="tag" class="logo">
    <nuxt-link to="/">
      <img :src="imageUrl" alt="行政書士 しおかぜ事務所">
    </nuxt-link>
  </component>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    vh: {
      type: String,
      default: 'horizontal'
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
.logo {
  width: 300px;
  max-height: 290px;
  margin: 0 auto;
  display: block;
}
@media (max-width: 600px) {
  .logo {
    width: 300px;
    height: auto;
  }
}
</style>
