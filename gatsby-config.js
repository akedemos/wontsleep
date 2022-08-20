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
          apiKey: 'AIzaSyCI-tkrWLe0it3HduYign1LgH5ffSB30LU',
          authDomain: 'wontsleep-967aa.firebaseapp.com',
          projectId: 'wontsleep-967aa',
          storageBucket: 'wontsleep-967aa.appspot.com',
          messagingSenderId: '257671066613',
          appId: '1:257671066613:web:1477042eef75b6abec66bc'
        }
      }
    }
  ]
}
