<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Logo />
      <a
        role="button"
        :class="[{'navbar-burger': true}, {'is-active': state.isActive}]"
        aria-label="menu"
        aria-expanded="false"
        @click="toggle"
      >
        {{ /* eslint-disable */ }}
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        {{ /* eslint-enable */ }}
      </a>
    </div>
    <div
      :class="[{'navbar-menu': true}, {'is-active': state.isActive}]"
      @click="toggle"
    >
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
        <nuxt-link class="navbar-item" to="blog">
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
import { createComponent, reactive } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'

export default createComponent({
  components: {
    Logo
  },
  setup () {
    const state = reactive({
      isActive: false
    })
    function toggle () {
      state.isActive = !state.isActive
    }
    return { toggle, state }
  }
})

</script>

<style scoped>
.navbar-menu {
  width: 100%;
  position: absolute;
}
.navbar-start .navbar-item.nuxt-link-active {
  color: var(--primary);
}
.button:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
