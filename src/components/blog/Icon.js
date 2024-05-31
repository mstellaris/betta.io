import React from "react"
import * as FIIcons from 'react-icons/fi' 

const BlogIcons = ({ type }) => {
  let Component = FIIcons[`Fi${type}`]
  if (Component === undefined) { Component = FIIcons['FiCode'] }
  return <Component />
}

export default BlogIcons;