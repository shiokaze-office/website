<template>
  <div class="container">
    <About />

    <h3>ご提案</h3>
    <div v-for="(attr, key) in proposalMdAttrs" :key="key" class="card">
      <p> <img :src="attr.image" :alt="attr.title"></p>
      <p>
        <nuxt-link :to="`/proposals/${attr.name}`">
          {{ attr.title }}
        </nuxt-link>
      </p>
      <p> {{ attr.date }} </p>
    </div>

    <h3>ブログ</h3>
    <div v-for="(attr, key) in blogMdAttrs" :key="key" class="card">
      <p> <img :src="attr.image" :alt="attr.title"></p>
      <p>
        <nuxt-link :to="`/blog/${attr.name}`">
          {{ attr.title }}
        </nuxt-link>
      </p>
      <p> {{ attr.date }} </p>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import About from '~/components/About.vue'

interface MarkdownAttrWithName extends MarkdownAttr {
  name: string
}

export default createComponent({
  components: {
    About
  },
  setup () {
    const proposalMdAttrs: MarkdownAttrWithName[] = []
    const blogMdAttrs: MarkdownAttrWithName[] = []

    function importAll (resolve: any, attrs: MarkdownAttrWithName[]) {
      resolve.keys().forEach((key: any) => {
        const [, name] = key.match(/\/(.+)\.md$/)
        attrs.push({ ...resolve(key).attributes, name })
      })
    }

    importAll(require.context('~/contents/proposals', true, /\.md$/), proposalMdAttrs)
    importAll(require.context('~/contents/blog', true, /\.md$/), blogMdAttrs)

    return { proposalMdAttrs, blogMdAttrs }
  }
})
</script>

<style>
</style>
