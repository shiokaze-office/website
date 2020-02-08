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
        <nuxt-link class="navbar-item" to="inheritance">
          遺言・相続
        </nuxt-link>
        <nuxt-link class="navbar-item" to="guardianship">
          任意後見契約
        </nuxt-link>
        <nuxt-link class="navbar-item" to="family-trust">
          家族信託
        </nuxt-link>
        <nuxt-link class="navbar-item" to="notarial-deed">
          その他の公正証書作成
        </nuxt-link>
        <nuxt-link class="navbar-item" to="notarial-deed">
          ブログ
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-outlined" to="hello">
              行政書士紹介
            </nuxt-link>
            <nuxt-link class="button is-outlined" to="office">
              事務所アクセス
            </nuxt-link>
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
