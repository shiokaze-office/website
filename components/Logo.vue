<template>
  <component :is="tag" class="logo">
    <img v-if="vh === 'horizontal'" src="~/assets/img/shiokaze-logo-horizontal.svg" :alt="imgAlt">
    <img v-else src="~/assets/img/shiokaze-logo-vertical.svg" :alt="imgAlt">
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
  setup () {
    const imgAlt: string = '行政書士 しおかぜ事務所'
    return {
      imgAlt
    }
  }
})
</script>

<style scoped>
.logo {
  width: 400px;
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
