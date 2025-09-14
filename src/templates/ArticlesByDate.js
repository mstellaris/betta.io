import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import List from '../components/blog/List'

const ArticlesByDatePosts = ({ data, pageContext: { slug } }) => (
  <Layout>
    <List articles={data.articles.nodes}
      title={slug.replace('/blog/', '')} />
  </Layout>
)

export default ArticlesByDatePosts;

export const query = graphql`
  query($slug: String!) {
    articles: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { ne: true } }
        fields:{slug:{regex: $slug}}
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

export const Head = ({ pageContext: { slug } }) => (
  <title>{slug.replace('/blog/', 'Blog Posts for ')}</title>
)
