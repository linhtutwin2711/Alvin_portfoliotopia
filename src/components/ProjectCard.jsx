import { Link } from 'react-router-dom'

// One project card. "p" is one item from the projects list in data.js
function ProjectCard({ p }) {
  var tags = []
  for (var i = 0; i < p.tools.length; i++) {
    tags.push(<span key={i}>{p.tools[i]}</span>)
  }

  return (
    <Link className="card fade" to={'/projects/' + p.id}>
      <div className={'thumb ' + p.color}><span>{p.code}</span></div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <div className="tag-row">{tags}</div>
      </div>
    </Link>
  )
}

export default ProjectCard
