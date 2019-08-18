<template>
  <footer class="thefooter">
    <p>&copy; 2019 shiokaze.net</p>
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
  font-weight: bold;
  font-size: .85em;
  margin: 2em 0;
}
</style>
