<template>
  <p class="the-callout">
    <span class="emoji">{{ emoji }}</span> <span v-if="pref !== ''" class="prefix">{{ pref }}</span> <slot />
  </p>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    emoji: {
      type: String,
      default: '💡'
    },
    pref: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
  .the-callout {
    padding: 1em 1em 1em 2.7em;
    background-color: whitesmoke;
    margin-bottom: 1.5em;
    position: relative;
  }
  .emoji {
    padding-right: .5em;
    font-family: "apple color emoji","segoe ui emoji","noto color emoji","android emoji","emojisymbols","emojione mozilla","twemoji mozilla","segoe ui symbol";
    display: block;
    position: absolute;
    left: 1em;
    top: 1em;
  }
  .prefix {
    font-weight: bold;
  }
</style>
