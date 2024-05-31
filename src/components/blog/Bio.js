import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'

import Icon from "./Icon"

import style from './Bio.module.scss'

const Bio = ({
  bio,
  image
}) => (
  <div className={style.bio}>
    <Img fixed={image.childImageSharp.fixed} />
    <header><span>{ bio.title }</span></header>
    <ReactMarkdown source={ bio.description } />

    <div className={style.icons}>
      <a href='https://gr4vy.com/' aria-label="briefcase" ><Icon type='Briefcase' /></a>
      <a href='https://twitter.com/cbetta' aria-label="twitter" ><Icon type='Twitter' /></a>
      <a href='https://linkedin.com/in/cbetta' aria-label="linkedin"><Icon type='Linkedin' /></a>
    </div>
  </div>
)

export default Bio
