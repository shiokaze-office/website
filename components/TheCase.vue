<template>
  <div class="the-case">
    <span class="the-case--bar" />
    <span class="the-case--circle" />
    <p class="the-case--title">
      {{ name }}
    </p>
    <p class="the-case--body">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    name: {
      type: String,
      default: 'Case☝️'
    }
  },
  setup () {
    return { }
  }
})
</script>

<style scoped>
  .the-case {
    padding: 0 0 0 2.2em;
    position: relative;
    overflow: hidden;
  }
  .the-case--circle {
    display: block;
    content: ' ';
    position: absolute;
    top: 10px;
    left: 1px;
    border-radius: 10px;
    background-color: var(--secondary);
    width: 20px;
    height: 20px;
  }
  .the-case--bar {
    display: block;
    content: ' ';
    position: absolute;
    top: -1.5em;
    left: 7px;
    border-radius: 5px;
    background-color: #E6E0ED;
    width: 8px;
    height: 100%;
  }
  .the-case--title {
    font-weight: bold;
    padding-bottom: .2em;
  }
  .the-case--body {
    font-size: 1.2em;
  }
</style>
