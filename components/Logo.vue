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
      default: 'vertical'
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
  width: 200px;
  height: 70px;
  margin: 0 auto 1em;
  display: block;
  overflow: hidden;
}
@media (max-width: 600px) {
  .logo {
    width: 300px;
    height: auto;
  }
}
</style>
