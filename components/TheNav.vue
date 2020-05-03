<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" @click.native="hide">
        <Logo type="horizontal" />
      </nuxt-link>
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
    <div :class="[{'navbar-menu': true}, {'is-active': state.isActive}]">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="inheritance" @click.native="toggle">
          遺言・相続
        </nuxt-link>
        <nuxt-link class="navbar-item" to="guardianship" @click.native="toggle">
          任意後見契約
        </nuxt-link>
        <nuxt-link class="navbar-item" to="family-trust" @click.native="toggle">
          家族信託
        </nuxt-link>
        <nuxt-link class="navbar-item" to="notarial-deed" @click.native="toggle">
          公正証書作成
        </nuxt-link>
        <nuxt-link class="navbar-item" to="blog" @click.native="toggle">
          ブログ
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-outlined" to="about" @click.native="toggle">
              行政書士紹介
            </nuxt-link>
            <nuxt-link class="button is-outlined" to="office" @click.native="toggle">
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
    function hide () {
      state.isActive = false
    }
    return { toggle, hide, state }
  }
})

</script>

<style scoped>
.navbar-start .navbar-item.nuxt-link-active {
  color: var(--primary);
}
.navbar {
  padding: 0 .2rem;
}
.navbar-burger {
  width: 6rem;
  height: 6rem;
}
@media (max-width: 1024px) {
  .navbar-menu.is-active {
    width: 100%;
    position: absolute;
  }
}
</style>
