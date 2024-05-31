import React from "react"
import { graphql } from 'gatsby'
import Layout from "../layouts/Layout"
import List from "../components/blog/List"

const BlogsPage = ({ data, path }) => (
  <Layout path={path}>
    <List articles={data.articles.nodes} title='Blog' />
  </Layout>
)

export default BlogsPage;

export const query = graphql`
  query {
    articles: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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