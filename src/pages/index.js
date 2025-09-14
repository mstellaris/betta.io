import React from "react"
import { graphql } from 'gatsby'
import Layout from "../layouts/Layout"
import site from "../../site-metadata.json"
import List from "../components/blog/List"
import Bio from "../components/blog/Bio"

const IndexPage = ({ data, path }) => (
  <Layout path={path}>
    <Bio bio={data.bio} image={data.image} />
    <List articles={data.articles.nodes} />
  </Layout>
)

export default IndexPage;

export const query = graphql`
  query {
    bio: biosYaml {
      title
      description
    }
    image: file(relativePath: { eq: "cbetta.jpg" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    articles: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "content/blog/" }
      }
    ) 
    {
      nodes {
        id
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          icon
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`

export const Head = () => (
  <>
    <html lang="en-US" />
    <title>{site.title}</title>
    <meta name="description" content={site.description} />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://www.google-analytics.com" />
    <link rel="alternate" type="application/rss+xml" href="https://betta.io/atom.xml" />
  </>
)
