<template>
  <header>
    <Logo tag="h1" vh="vertical" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class TheHeader extends Vue {
}
</script>

<style scoped>
</style>
