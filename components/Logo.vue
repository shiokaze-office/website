<template>
  <component :is="computedTag" class="logo">
    <img v-if="vh === 'horizontal'" src="~/assets/img/shiokaze-logo-horizontal.svg" :alt="imgAlt">
    <img v-else src="~/assets/img/shiokaze-logo-vertical.svg" :alt="imgAlt">
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {
  public imgAlt: string = '行政書士 しおかぜ事務所'

  @Prop() public vh!: string
  @Prop() public tag!: string

  public get computedTag () {
    return (this.tag === undefined) ? 'span' : this.tag
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
