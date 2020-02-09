<template>
  <article>
    <header>
      <h1>{{ attr.title }}</h1>
      <p>{{ attr.date }}</p>
      <p>{{ attr.description }}</p>
      <ul>
        <li v-for="(v, k) in attr.keywords" :key="k">
          {{ k }}
        </li>
      </ul>
    </header>
    <component :is="dynamicComponent" />
  </article>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
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
    const dynamicComponent = md.vue.component
    return { attr, dynamicComponent }
  }
})
</script>

<style>
</style>
