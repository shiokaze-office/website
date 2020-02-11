<template>
  <div class="the-img">
    <img alt="alt || caption" :src="getImage()" class="the-img--image">
    <span v-if="caption" class="the-img--caption">
      {{ caption }}
    </span>
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api'

export default createComponent({
  props: {
    path: {
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
  setup ({ path }, context: SetupContext) {
    const pagePath = context.root.$root.$route.path
    function getImage () {
      return require(`~/assets/images${pagePath}/${path}`)
    }
    return { getImage }
  }
})
</script>

<style scoped>
  .the-img {
    padding: 1em 0 5em;
  }
  .the-img, .the-img--image {
    width: 100%;
  }
  .the-img--caption {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.7;
    display: block;
    text-align: center;
  }
</style>
