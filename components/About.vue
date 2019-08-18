<template>
  <section class="about">
    <p class="body">しおかぜ事務所は、成年後見、遺言、生前・死後事務委任、信託を利用して、人生の終わりをサポートする行政書士事務所です。</p>
    <p class="address">〒819-0001 福岡市西区小戸5-10-20<br> TEL/FAX:  <a href="tel:0928348834">092-834-8834</a> </p>
    <p class="contact">
      <a class="button is-medium" href="https://docs.google.com/forms/d/e/1FAIpQLSfQNI2nAEvKfKxmx8We5KT10foX48iAH18bsh0182Ew4N-J3g/viewform">お問い合わせ</a>
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class About extends Vue {
}
</script>

<style scoped>
.body {
  font-size: 1.5em;
  margin: 1em 0 1.5em;
}

.address {
  margin: 0 0 2em;
}

.contact {
  margin: 0 0 3em;
}
</style>
