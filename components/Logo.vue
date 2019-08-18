<template>
  <component v-bind:is="computedTag" class="logo"> <img :src="computedImage" :alt="imgAlt"> </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {
  public imgAlt: string = '行政書士 しおかぜ事務所'

  @Prop() public vh!: string
  @Prop() public tag!: string

  public get computedImage() {
    if (this.vh === undefined) {
      this.vh = 'horizontal'
    }
    return require(`~/assets/img/shiokaze-logo-${this.vh}.svg`)
  }

  public get computedTag() {
    if (this.tag === undefined) {
      this.tag = 'span'
    }
    return `${this.tag}`
  }
}
</script>

<style scoped>
.logo {
  width: 400px;
  max-height: 290px;
  margin: 0 auto;
  display: block;
}
@media (max-width: 600px) {
  .logo {
    width: 300px;
    height: auto;
  }
}
</style>
