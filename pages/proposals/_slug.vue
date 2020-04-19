<template>
  <div class="container proposal">
    <article>
      <header class="proposal--header">
        <h1 class="proposal--title">
          {{ attr.title }}
        </h1>
        <p class="proposal--description">
          {{ attr.description }}
        </p>
      </header>
      <div class="proposal--body">
        <ul class="proposal--tags">
          <li v-for="(v, k) in attr.keywords" :key="k">
            {{ v }}
          </li>
        </ul>
        <component :is="dynamicComponent" />
      </div>
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
.proposal--header {
}
.proposal--tags {
  position: absolute;
  top: 1em;
  left: -320px;
  color: var(--secondary);
}
.proposal--body {
  position: relative;
  width: 760px;
  margin: 0 auto;
}
.the-media-right {
  margin-right: -25%;
}
</style>
