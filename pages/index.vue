<template>
  <div class="container index">
    <div class="index--first">
      <h1 class="index--title">人生の終わりをサポート</h1>
      <p class="index--desc">
        しおかぜ事務所は、<span class="marker">成年後見</span>、<span class="marker">遺言</span>、<span class="marker">生前・死後事務委任</span>、<span class="marker">信託</span>を利用して、人生の終わりをサポートする行政書士事務所です。
      </p>
      <img src="~/assets/images/top.png" alt="しおかぜ事務所">
    </div>

    <section class="index--proposals">
      <h2 class="index--proposals--title">ご提案</h2>
      <p class="index--proposals--desc">
        さまざまな方へ私たちからのご提案です。
      </p>
      <div class="columns is-9">
        <div v-for="(attr, key) in proposalMdAttrs" :key="key" class="index--proposal column">
          <div v-if="attr.image">
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
      </div>
    </section>

    <section class="index--blog">
      <h2 class="index--blog--title">ブログ</h2>
      <div v-for="(attr, key) in blogMdAttrs" :key="key" class="">
        <article>
          <div>
            <img :src="attr.image" :alt="attr.title">
          </div>
          <div>
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
    </section>
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
.index--title {
  font-weight: 900;
  font-size: 3em;
}
.index--proposal--description {
  font-size: 1.2em;
}
.index--proposal--button {
}
.marker {
  background: linear-gradient(transparent 50%, #E6E0ED 0%);
}
</style>
