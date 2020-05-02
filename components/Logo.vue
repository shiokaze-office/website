<template>
  <component :is="tag" class="logo">
    <img :class="type" :src="imageUrl" alt="行政書士 しおかぜ事務所">
  </component>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    type: {
      type: String,
      default: 'weave'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  setup ({ type }) {
    const imageUrl = require(`~/assets/images/logo-${type}.svg`)
    return { imageUrl }
  }
})
</script>

<style scoped>
.weave {
  margin: 0.5rem 0.75rem;
  width: 8rem;
}
.horizontal {
  margin: 0;
  padding: 5px 3em 0 0;
  height: 60px;
}
.horizontal:hover {
  opacity: 0.6;
}
@media (max-width: 1024px) {
  .weave {
    margin: 5px 5px 0;
    width: auto;
    height: 42px;
  }
}
</style>
