<template>
  <div class="container">
    <article v-if="slug">
      <header>
        <h1>{{ attr.title }}</h1>
        <p>{{ attr.date }}</p>
        <p>{{ attr.description }}</p>
        <ul>
          <li v-for="(v, k) in attr.keywords" :key="k">
            {{ v }}
          </li>
        </ul>
      </header>
      <component :is="dynamicComponent" />
    </article>
    <div v-else>
      <h1>ブログ</h1>
      <div v-for="(attr, key) in blogMdAttrs" :key="key" class="">
        <article>
          <div class="">
            <img :src="attr.image" :alt="attr.title">
          </div>
          <div class="">
            <p class="title">
              <nuxt-link :to="`/blog/${attr.name}`">
                {{ attr.title }}
              </nuxt-link>
            </p>
            <p> {{ attr.date }} </p>
            <p class="description">
              {{ attr.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api'

interface MarkdownAttrWithName extends MarkdownAttr {
  name: string
}

export default createComponent({
  components: {
  },
  setup (_, context: SetupContext) {
    function importAll (resolve: any, attrs: MarkdownAttrWithName[]) {
      resolve.keys().forEach((key: any) => {
        const [, name] = key.match(/\/(.+)\.md$/)
        attrs.push({ ...resolve(key).attributes, name })
      })
    }

    const slug = context.root.$root.$route.params.slug || ''

    if (slug === '') {
      const blogMdAttrs: MarkdownAttrWithName[] = []
      importAll(require.context('~/contents/blog', true, /\.md$/), blogMdAttrs)
      return { blogMdAttrs, slug }
    }

    // https://hmsk.github.io/frontmatter-markdown-loader/vue.html
    const md = require(`~/contents/blog/${slug}.md`)
    const attr: MarkdownAttr = md.attributes
    const dynamicComponent = md.vue.component
    return { attr, dynamicComponent, slug }
  }
})
</script>

<style scoped>
</style>
