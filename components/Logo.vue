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
  margin: .5rem .75rem .3rem;
  width: 8rem;
}
.horizontal {
  margin: 0;
  padding: .2rem 3rem 0 0;
  height: 3rem;
}
.horizontal:hover {
  opacity: 0.6;
}
@media (max-width: 1024px) {
  .horizontal {
    padding: .7rem 0 0;
    height: 5rem;
  }
}
</style>
