<template>
  <div class="container">
    <p>
      しおかぜ事務所は、成年後見、遺言、生前・死後事務委任、信託を利用して、人生の終わりをサポートする行政書士事務所です。
    </p>

    <div v-for="(attr, key) in proposalMdAttrs" :key="key" class="">
      <article>
        <div class="">
          <img :src="attr.image" :alt="attr.title">
        </div>
        <div class="">
          <h3 class="title">
            <nuxt-link :to="`/proposals/${attr.name}`">
              {{ attr.title }}
            </nuxt-link>
          </h3>
          <p class="description">
            {{ attr.description }}
          </p>
          <nuxt-link :to="`/proposals/${attr.name}`" class="button">
            続きを読む
          </nuxt-link>
        </div>
      </article>
    </div>

    <h3>ブログ</h3>
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
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

interface MarkdownAttrWithName extends MarkdownAttr {
  name: string
}

export default createComponent({
  components: {
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

<style scoped>
</style>
