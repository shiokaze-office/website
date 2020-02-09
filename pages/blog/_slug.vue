<template>
  <div class="container">
    <Blog :name="slug" />
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api'
import Blog from '~/components/Blog.vue'
export default createComponent({
  components: {
    Blog
  },
  setup (_, context: SetupContext) {
    const slug = context.root.$root.$route.params.slug
    return { slug }
  }
})
</script>

<style module>
</style>
