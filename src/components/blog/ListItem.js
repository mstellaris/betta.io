import React from "react"
import { Link } from "gatsby"
import * as style from "./ListItem.module.scss"
import Icon from "./Icon"

const BlogListItem = ({ timeToRead, fields, frontmatter }) => (
  <Link to={ fields.slug } className={style.crank} title={frontmatter.title}>
    <Icon type={ frontmatter.icon } />
    <header>
      <span>
        { frontmatter.title }
      </span>
      <small>
        <span>{ frontmatter.date  } -</span>
        <span>{ timeToRead } minute read</span>
      </small>
    </header>
  </Link>
)

export default BlogListItem;