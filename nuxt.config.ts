import { Configuration } from '@nuxt/types'

const config: Configuration = {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&family=Noto+Serif+JP:wght@900&display=swap' }
    ]
  },
  loading: { color: '#D5C9DE' },
  css: [
    '@/assets/styles/base.scss'
  ],
  plugins: [
    '@/plugins/composition-api',
    { src: '@/plugins/googlemap', ssr: false }
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module'
  ],
  styleResources: {
    scss: ['@/assets/styles/variables.scss']
  },
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-10693153-3' }],
    ['nuxt-fontawesome', {
      component: 'Fa',
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }, {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }]
    }]
  ],
  transpile: [/^vue2-google-maps($|\/)/],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          preserve: false,
          importFrom: ['assets/styles/custom-properties.css']
        },
      },
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend (conf: any, ctx): void{
      conf.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          options: {
            mode: ['html', 'vue-component'],
            vue: {
              root: 'dynamicContent'
            }
          }
        }
      )
    }
  }
}

export default config
