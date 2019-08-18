<template>
  <footer class="thefooter">
    <p>&copy; 2014-2019 行政書士 しおかぜ事務所</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class TheFooter extends Vue {
}
</script>

<style scoped>
.thefooter {
  text-align: center;
  font-size: .7em;
  margin: 2em 0;
}
</style>
