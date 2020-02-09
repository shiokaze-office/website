<template>
  <div class="container">
    <Proposal :name="slug" />
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api'
import Proposal from '~/components/Proposal.vue'
export default createComponent({
  components: {
    Proposal
  },
  setup (_, context: SetupContext) {
    const slug = context.root.$root.$route.params.slug
    return { slug }
  }
})
</script>

<style module>
</style>
