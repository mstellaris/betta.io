const siteMetadata = require('./site-metadata.json')

const FileSystem = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `./content/blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `galleries`,
      path: `./content/galleries`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `./content/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `./content/data/`,
    },
  },
]

const Styling = [
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: require('sass-embedded')
    }
  },
]

const Images = [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`
]

const Markdown = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      gfm: true,
      plugins: [
        'gatsby-remark-autolink-headers',
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 600,
            withWebp: true,
            quality: 50
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        "gatsby-remark-copy-linked-files"
      ],
    },
  },
  `gatsby-plugin-catch-links`,
]

const Blog = [
  'blog-create-pages',
  `gatsby-plugin-twitter`
]

const Feed = [
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `{
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }`,
      feeds: [
        {
          query: `
            {
              allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
                filter: {
                  frontmatter: { draft: { ne: true } }
                  fileAbsolutePath: { regex: "content/blog/" }
                }
              ) {
                nodes {
                  excerpt
                  html
                  frontmatter {
                    title
                    date
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          `,
          output: `/atom.xml`,
          title: "Cristiano Betta",
          match: "^/blog/",
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.nodes.map(node => {
              return Object.assign({}, node.frontmatter, {
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              })
            })
          }
        },
      ],
    },
  }
]

const PWA = [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Cristiano Betta",
      short_name: "Betta",
      start_url: "/",
      background_color: "#FAFAFA",
      theme_color: "#FAFAFA",
      display: "standalone",
      icon: "content/images/icon.png",
    },
  },
    `gatsby-plugin-offline`
]

const SEO = [
  `gatsby-plugin-sitemap`,
]

// Enable GA4 (gtag) only when a measurement ID is provided
const Analytics = process.env.GATSBY_GA_MEASUREMENT_ID ? [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [process.env.GATSBY_GA_MEASUREMENT_ID],
      gtagConfig: {
        anonymize_ip: true,
      },
      pluginConfig: {
        head: true,
        respectDNT: true,
        exclude: [
          `/offline-plugin-app-shell-fallback/`,
        ],
      },
    },
  }
] : []

const Robots = [
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      host: siteMetadata.siteUrl,
      sitemap: `${siteMetadata.siteUrl}/sitemap-index.xml`,
      policy: [
        { userAgent: '*', allow: '/' }
      ]
    }
  }
]

const Optimizations = [ 
  `gatsby-plugin-netlify`,
]

const Data = [
  `gatsby-transformer-yaml`
]

const Galleries = [
  'galleries-create-pages',
]

module.exports = {
  siteMetadata,
  trailingSlash: 'always',
  plugins: [
    ...FileSystem,
    ...Styling,
    ...Images,
    ...Markdown,
    ...Blog,
    ...Galleries,
    ...Data,
    ...Feed,
    ...PWA,
    ...Analytics,
    ...Robots,
    ...SEO,
    ...Optimizations,
  ],
}
