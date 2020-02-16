<template>
  <div class="the-media" :class="mediaClass">
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
    },
    float: {
      type: String
    }
  },
  setup ({ float }) {
    const mediaClass = float === 'left' ? 'the-media-left' : (float === 'right' ? 'the-media-right' : '')
    return { mediaClass }
  }
})
</script>

<style>
.the-media-left {
  width: 75%;
  margin-left: -25%;
  float: left;
  clear: left;
}
.the-media-right {
  width: 75%;
  margin-right: -25%;
  float: right;
  clear: right;
}
</style>
