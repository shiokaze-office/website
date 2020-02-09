<template>
  <article>
    <header>
      <h1>{{ attr.title }}</h1>
      <p>{{ attr.description }}</p>
      <ul>
        <li v-for="(v, k) in attr.keywords" :key="k">
          {{ v }}
        </li>
      </ul>
    </header>
    <component :is="dynamicComponent" />
  </article>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import TheMedia from '~/components/TheMedia.vue'

export default createComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup ({ name }) {
    // https://hmsk.github.io/frontmatter-markdown-loader/vue.html
    const md = require(`~/contents/proposals/${name}.md`)
    const attr: MarkdownAttr = md.attributes
    const dynamicComponent = {
      extends: md.vue.component,
      components: { TheMedia }
    }
    return { attr, dynamicComponent }
  }
})
</script>

<style>
</style>
