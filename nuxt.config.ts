import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_fullname || '',
    titleTemplate: `%s - ${process.env.npm_package_fullname}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/css/style.css'
  ],
  plugins: [
    { src: '~plugins/googlemap', ssr: false }
  ],
  devModules: [
  ],
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-10693153-3' }],
    '@nuxtjs/bulma'
  ],
  transpile: [/^vue2-google-maps($|\/)/],
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
