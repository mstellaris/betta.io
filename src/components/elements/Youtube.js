import React from "react"
import ResponsiveEmbed from 'react-responsive-embed'
import * as style from './Youtube.module.scss'

const Youtube = ({ id }) => (
  <div className={style.youtube}>
    <ResponsiveEmbed 
      src={ `https://www.youtube.com/embed/${id}` }
      allowFullScreen />
  </div>
)

export default Youtube