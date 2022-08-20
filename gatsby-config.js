/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')
console.log(process.env.FIREBASE_API_KEY)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'WontSleep',
    description: 'An app for those who had a coffee',
    author: '@akedemos',
    siteUrl: 'https://capable-gaufre-0b80e4.netlify.app'
  },

  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, '/src/assets/images')
      }
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    {
      // resolve: `gatsby-plugin-google-fonts`,
      resolve: 'gatsby-plugin-google-fonts-with-attributes',
      options: {
        fonts: [
          // `roboto slab\:300,400,400i,500,600,700,800,900`,
          // `roboto\::300,400,400i,500,600,700,800,900`,
          'roboto condensed:300,400,400i,500,600,700,800,900',
          'work sans:300,400,400i,500,600,700,800,900'
          // you can also specify font weights and styles
        ],
        display: 'swap',
        attributes: {
          rel: 'preload',
          as: 'font'
          // rel: "stylesheet preload prefetch",
          // as: "style",
        }
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-firebase-v9.0',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID
        }
      }
    }
  ]
}
