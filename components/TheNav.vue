<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Logo />
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true">aaa</span>
        <span aria-hidden="true">bbb</span>
        <span aria-hidden="true">ccc</span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">遺言・相続</a>
        <a class="navbar-item">任意後見契約</a>
        <a class="navbar-item">家族信託</a>
        <a class="navbar-item">その他の公正証書作成</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-outlined">行政書士紹介</a>
            <a class="button is-outlined">事務所アクセス</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'

export default createComponent({
  components: {
    Logo
  },
  setup () {
    return { }
  }
})

</script>

<style scoped>
</style>
