<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <Logo />
      <p><Fa :icon="['far', 'copyright']" /> 2014-{{ currentYear }} 行政書士 しおかぜ事務所</p>
    </div>
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
.footer {
  background-color: #fff;
  font-size: .7em;
  margin: 2em 0;
  padding: 0;
}
</style>
