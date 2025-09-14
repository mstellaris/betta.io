import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Menu from './Menu'
import * as style from "./Layout.module.scss"
import 'typeface-roboto'

const PagesLayout = ({ children, path }) => (
  <StaticQuery
    query={query}
    render={(data => (
      <>
        <Layout { ...data } path={path}>
          { children }
        </Layout>
      </>
    ))}
  />
)

export default PagesLayout;

const Layout = ({ children, path }) => (
  <div className={style.layoutcontent}>
    <Menu path={path} />
    <div className={style.body}>
      <div>
        {children}
      </div>
    </div>
  </div>
)


const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        description, 
        name
      }
    }
  }
`;
