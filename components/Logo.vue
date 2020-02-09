<template>
  <component :is="tag" class="logo">
    <img :class="vh" :src="imageUrl" alt="行政書士 しおかぜ事務所">
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
    const imageUrl = require(`~/assets/images/logo-${vh}.svg`)
    return { imageUrl }
  }
})
</script>

<style scoped>
.weave {
  margin: 0.5rem 0.75rem;
  width: 8rem;
}
@media (max-width: 1024px) {
  .weave {
    margin: 5px 5px 0;
    width: auto;
    height: 42px;
  }
}
</style>
