import React from "react"
import Link from "../Link"
import * as style from "./ListItem.module.scss"
import Icon from "../blog/Icon"

const GalleriesListItem = ({ fields, frontmatter, excerpt }) => {
  
  return (
    <Link 
      to={fields.slug} 
      className={style.bollocks} 
    >
      <Icon type={ frontmatter.icon } />
      <header>
        <span>
          { frontmatter.title }
        </span>
      </header>
      <p></p>
      <p>{ excerpt }</p>
    </Link>
  )
}

export default GalleriesListItem;