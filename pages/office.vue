<template>
  <div>
    <div class="container">
      <h1>事務所アクセス</h1>
      <p class="address">
        〒819-0001 福岡市西区小戸5-10-20<br> TEL/FAX:  <a href="tel:0928348834">092-834-8834</a>
      </p>
      <p class="contact">
        <a class="button" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfQNI2nAEvKfKxmx8We5KT10foX48iAH18bsh0182Ew4N-J3g/viewform">お問い合わせ</a>
      </p>
    </div>
    <Map />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Map from '~/components/Map.vue'

export default createComponent({
  components: {
    Map
  },
  setup () {
    return { }
  }
})
</script>

<style scoped>
</style>
