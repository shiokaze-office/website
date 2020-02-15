<template>
  <div class="container proposal">
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
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api'
import TheMedia from '~/components/TheMedia.vue'
import TheCallout from '~/components/TheCallout.vue'
import TheCase from '~/components/TheCase.vue'

export default createComponent({
  components: {
  },
  setup (_, context: SetupContext) {
    const slug = context.root.$root.$route.params.slug
    // https://hmsk.github.io/frontmatter-markdown-loader/vue.html
    const md = require(`~/contents/proposals/${slug}.md`)
    const attr: MarkdownAttr = md.attributes
    const dynamicComponent = {
      extends: md.vue.component,
      components: { TheMedia, TheCallout, TheCase }
    }
    return { attr, dynamicComponent }
  }
})
</script>

<style scoped>
</style>
