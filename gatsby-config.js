module.exports = {
  siteMetadata: {
    title: `行政書士 しおかぜ事務所`,
    siteUrl: `https://shiokaze.net`,
    description: `しおかぜ事務所は、成年後見、遺言、事務委任、信託などを利用して、安心できる老後へサポートする行政書士事務所です。`,
    keywords: `行政書士, 福岡, 成年後見, 遺言, 事務委任, 信託, 老後`,
    author: `shiokazenet`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-component`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#CEC0D9`,
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `行政書士 しおかぜ事務所`,
        short_name: 'しおかぜ事務所',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: `standalone`,
        icon: 'src/images/shiokaze-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-10693153-3`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'post-toc-anchor',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 860,
            },
          },
        ],
      },
    },
  ],
}
