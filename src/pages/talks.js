import React from "react"
import { graphql } from 'gatsby'
import Layout from "../layouts/Layout"
import List from "../components/talks/List"

const TalksPage = ({ data, path }) => (
  <Layout path={path}>
    <List talks={ data.talks.nodes } />
  </Layout>
)

export default TalksPage;

export const query = graphql`
  query {
    talks: allTalksYaml(
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        conference
        conference_url
        date(formatString: "MMMM D, YYYY")
        country
        icon
        id
        title
        url
      }
    }
  }
  
`