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
  color: #221822;
}

a {
  color: #CC9999;
}

a:hover {
  color: #FF9999;
}

h1, h2, h3, h4, h5, header, footer {
  font-family: 'Noto Sans JP', sans-serif;
}

h1 a, h2 a, h3 a {
  color: #666699;
}

h1 a:hover, h2 a:hover, h3 a:hover {
  color: #6666CC;
}

h1 {
  font-weight: bold;
  padding-top: 1.2em;
  padding-bottom: .5em;
  font-size: 3em;
}

h2 {
  font-weight: bold;
  padding-top: 1em;
  padding-bottom: .3em;
  font-size: 2.2em;
}

h3 {
  padding-top: .8em;
  padding-bottom: .2em;
  font-size: 1.8em;
}

p {
  font-size: 1.5em;
  line-height: 1.5;
  padding-bottom: 1em;
}
</style>
