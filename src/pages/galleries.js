import React from "react"
import { graphql } from 'gatsby'
import Layout from "../layouts/Layout"
import List from "../components/galleries/List"

const GalleriesPage = ({ data, path }) => (
  <Layout path={path}>
    <List galleries={data.galleries.nodes} />
  </Layout>
)

export default GalleriesPage;

export const query = graphql`
  query {
    galleries: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "content/galleries/" }
      }
    ) 
    {
      nodes {
        frontmatter {
          title
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