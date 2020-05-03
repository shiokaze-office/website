<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <Logo />
      <small class="copyright"><Fa :icon="['far', 'copyright']" /> 2014-{{ currentYear }} 行政書士 しおかぜ事務所</small>
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
  font-size: .9rem;
}
.copyright {
  display: block;
}
</style>
