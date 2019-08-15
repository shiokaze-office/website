<template>
  <div class="container">
    <div>
      <h1><logo /></h1>
      <!-- <h2 class="subtitle">福岡市西区にある行政書士事務所です</h2> -->
      <p>〒819-0001 福岡市西区小戸5-10-20<br> TEL/FAX:  <a href="tel:0928348834">092-834-8834</a> </p>
      <p class="contact"><a class="button is-medium" href="https://docs.google.com/forms/d/e/1FAIpQLSfQNI2nAEvKfKxmx8We5KT10foX48iAH18bsh0182Ew4N-J3g/viewform">お問い合わせ</a></p>
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

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.contact {
  margin-top: 2em;
}
</style>
