import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from 'react-markdown'
import Icon from "./Icon"
import * as style from './Bio.module.scss'

const Bio = ({
  bio,
  image
}) => (
  <div className={style.bio}>
    <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="Portrait of Cristiano Betta" />
    <header><span>{ bio.title }</span></header>
    <ReactMarkdown children={ bio.description } />

    <div className={style.icons}>
      <a href='https://gr4vy.com/' aria-label="briefcase" ><Icon type='Briefcase' /></a>
      <a href='https://twitter.com/cbetta' aria-label="twitter" ><Icon type='Twitter' /></a>
      <a href='https://linkedin.com/in/cbetta' aria-label="linkedin"><Icon type='Linkedin' /></a>
    </div>
  </div>
)

export default Bio
