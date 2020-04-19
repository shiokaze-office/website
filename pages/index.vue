<template>
  <div class="container index">
    <div class="index--first columns is-vcentered">
      <div class="column is-two-thirds">
        <img src="~/assets/images/top.png" alt="しおかぜ事務所">
      </div>
      <div class="column">
        <p class="index--copy">
          しおかぜ事務所は、成年後見、遺言、生前・死後事務委任、信託を利用して、人生の終わりをサポートする行政書士事務所です。
        </p>
      </div>
    </div>

    <section class="index--proposals is-clearfix columns is-desktop">
      <div v-for="(attr, key) in proposalMdAttrs" :key="key" class="index--proposal column">
        <div class="">
          <img :src="getCover(attr.image)" :alt="attr.title">
        </div>
        <div class="">
          <h3 class="index--proposal--title">
            <nuxt-link :to="`/proposals/${attr.name}`">
              {{ attr.title }}
            </nuxt-link>
          </h3>
          <p class="index--proposal--description">
            {{ attr.description }}
          </p>
          <nuxt-link :to="`/proposals/${attr.name}`" class="index--proposal--button button">
            続きを読む
          </nuxt-link>
        </div>
      </div>
    </section>

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

    function getCover(path: string) {
      return require(`~/assets/images/${path}`)
    }

    importAll(require.context('~/contents/proposals', true, /\.md$/), proposalMdAttrs)
    importAll(require.context('~/contents/blog', true, /\.md$/), blogMdAttrs)

    return { proposalMdAttrs, blogMdAttrs, getCover }
  }
})
</script>

<style scoped>
.index--first {
  padding-bottom: 2em;
}
.index--proposal--description {
  font-size: 1.2em;
}
.index--proposal--button {
}
</style>
