import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_fullname || '',
    titleTemplate: `%s - ${process.env.npm_package_fullname}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  devModules: [
  ],
  modules: [
    '@nuxtjs/bulma'
  ],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}

export default config
