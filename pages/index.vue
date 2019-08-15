<template>
  <div class="container">
    <div>
      <h1 class="title"><logo /></h1>
      <h2 class="subtitle">福岡市西区にある行政書士事務所です</h2>
      <p>〒819-0001 福岡市西区小戸5-10-20<br> Tel/Fax 092-843-8843 </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class PageIndex extends Vue {
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
