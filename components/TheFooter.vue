<template>
  <footer class="thefooter">
    <Logo />
    <p><Fa :icon="['far', 'copyright']" /> 2014-{{ currentYear }} 行政書士 しおかぜ事務所</p>
  </footer>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'

export default createComponent({
  components: {
    Logo
  },
  setup () {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  }
})

</script>

<style scoped>
.thefooter {
  text-align: center;
  font-size: .7em;
  margin: 2em 0 1em;
}
</style>
