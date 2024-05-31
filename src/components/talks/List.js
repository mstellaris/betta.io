import React from "react"
import TalksListItem from "./ListItem"
import * as style from "./List.module.scss"

const TalksList = ({ talks, title }) => (
  <div className={ style.list }>
    <header><span>{ title || "Talks" }</span></header>

    <div className={style.description}>
      <p>
        I've had the honor to have spoken at the events below. I love to
        talk about Developer Experience and Developer Relations, and I'm
        fascinated with the boundary where technology and culture meet. 
      </p>
    </div>

    { talks.map(talk => (
      <TalksListItem {...talk} key={talk.id} />
    ))}
  </div>
)

export default TalksList;