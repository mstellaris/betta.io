import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Head from './Head'
import Menu from './Menu'
import style from "./Layout.module.scss"
import 'typeface-roboto'

const PagesLayout = ({ children, path }) => (
  <StaticQuery
    query={query}
    render={(data => (
      <>
        <Head { ...data } path={path} />
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