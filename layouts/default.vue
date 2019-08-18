<template>
  <div>
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheFooter from '~/components/TheFooter.vue'

@Component({
  components: {
    TheFooter
  }
})
export default class LayoutDefault extends Vue {
}
</script>

<style>
.container {
  margin: 1em auto 0;
  padding: 0 1em;
}

a {
  color: #CEC0D9;
  border-bottom: 1px solid #CEC0D9;
}

a:hover {
  color: #CEC0D9;
  border-bottom: 1px solid #E6E0ED;
}

p {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.5em;
  line-height: 1.5;
  padding-bottom: 1em;
}

h1 {
  margin: 0;
  padding: 0;
}

h2 {
  color: #CEC0D9;
  font-weight: bold;
}
</style>
