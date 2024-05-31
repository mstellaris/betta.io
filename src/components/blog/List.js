import React from "react"
import BlogListItem from "./ListItem"
import { style } from "./List.module.scss"

const BlogList = ({ articles, title }) => (
  <div className={ style }>
    <header><span>{ title || "Blog" }</span></header>

    { articles.map(article => (
      <BlogListItem {...article} key={article.id} />
    ))}
  </div>
)

export default BlogList;