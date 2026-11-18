import { useEffect } from 'react'
import { projects } from '../data.js'
import { fadeInOnScroll } from '../utils.js'
import ProjectCard from './ProjectCard.jsx'

// Shows project cards. type can be 'all', 'web' or 'uiux'. maxCount limits how many.
function ProjectGrid({ type, maxCount }) {
  var cards = []
  for (var i = 0; i < projects.length; i++) {
    var matches = (type === 'all' || projects[i].type === type)
    if (matches && cards.length < maxCount) {
      cards.push(<ProjectCard key={projects[i].id} p={projects[i]} />)
    }
  }

  // new cards need to fade in too
  useEffect(function () {
    fadeInOnScroll()
  }, [type, maxCount])

  if (cards.length === 0) {
    cards.push(<div className="empty" key="empty">Nothing here yet. More projects are coming soon!</div>)
  }
  return <div className="grid">{cards}</div>
}

export default ProjectGrid
