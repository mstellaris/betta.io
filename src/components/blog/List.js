import React from "react"

import ListItem from "./ListItem"
import { style } from "./List.module.scss"

export default ({ data: { allMarkdownRemark: { edges }} }) => (
  <div className={ style }>
    <header><span>Highlights from the blog</span></header>

    { edges.map(({ node }) => (
      <ListItem {...node} key={node.id} />
    ))}
  </div>
)