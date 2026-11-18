import { useState } from 'react'
import { usePageTitle } from '../hooks.js'
import ProjectGrid from '../components/ProjectGrid.jsx'

var filterList = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'uiux', label: 'UI/UX' }
]

function Projects() {
  usePageTitle('Projects - Lin Htut Win Alvin')
  var [filter, setFilter] = useState('all')

  var buttons = []
  for (var i = 0; i < filterList.length; i++) {
    var f = filterList[i]
    var cls = ''
    if (f.key === filter) { cls = 'on' }
    // .bind remembers which button this is, so each click sets its own value
    buttons.push(
      <button className={cls} key={f.key} onClick={setFilter.bind(null, f.key)}>{f.label}</button>
    )
  }

  return (
    <main>
      <section className="wrap page-top">
        <span className="small-tag">PROJECTS</span>
        <h1>Things I've built</h1>
        <p>Pick a project to read about the problem, how I made it and what I learned.</p>
        <div className="filters" role="group" aria-label="Filter projects">{buttons}</div>
      </section>
      <section className="wrap section" style={{ paddingTop: '10px' }}>
        <ProjectGrid type={filter} maxCount={99} />
      </section>
    </main>
  )
}

export default Projects
