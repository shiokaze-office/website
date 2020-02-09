<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default createComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup () {
    return { }
  }
})
</script>

<style>
.container {
  margin: 1em auto 0;
  padding: 0 1em;
  color: var(--text);
  min-height: 30em;
}

a {
  color: #CEC0D9;
}

a:hover {
  color: #CEC0D9;
}

h1, h2, h3, h4, h5, header, footer {
  font-family: 'Noto Sans JP', sans-serif;
}

h1 {
  color: var(--primary);
  font-weight: bold;
  padding-top: 1em;
  font-size: 3em;
}

h2 {
  color: var(--analogous);
  font-weight: bold;
  padding-top: .7em;
  font-size: 2.2em;
}

h3 {
  color: var(--secondary);
  font-weight: normal;
  font-size: 1.8em;
}

p {
  font-size: 1.5em;
  line-height: 1.5;
  padding-bottom: 1em;
}
</style>
