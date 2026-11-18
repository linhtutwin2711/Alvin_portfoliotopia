import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects, openLink } from '../data.js'
import { usePageTitle } from '../hooks.js'

var tabList = [
  { key: 'overview', label: 'Overview' },
  { key: 'process', label: 'Process' },
  { key: 'outcome', label: 'Outcome' }
]

// The page for one project
function ProjectBody({ id, showMessage }) {
  var p = projects[id - 1]
  var [tab, setTab] = useState('overview')
  usePageTitle(p.title + ' - Lin Htut Win Alvin')

  // previous and next project
  var prevIndex = (p.id - 2 + projects.length) % projects.length
  var nextIndex = p.id % projects.length

  // tab buttons
  var tabButtons = []
  for (var i = 0; i < tabList.length; i++) {
    var t = tabList[i]
    var cls = ''
    if (t.key === tab) { cls = 'on' }
    // .bind remembers which button this is, so each click sets its own value
    tabButtons.push(
      <button className={cls} key={t.key} onClick={setTab.bind(null, t.key)}>{t.label}</button>
    )
  }

  // the text under the tabs
  var panel
  if (tab === 'overview') {
    panel = <p>{p.overview}</p>
  } else if (tab === 'outcome') {
    panel = <p>{p.outcome}</p>
  } else {
    var steps = []
    for (var j = 0; j < p.process.length; j++) {
      steps.push(<li key={j}>{p.process[j]}</li>)
    }
    panel = <ol>{steps}</ol>
  }

  return (
    <main>
      <section className="wrap page-top">
        <Link className="back" to="/projects">← Back to projects</Link>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
        <div className="info-pills">
          <span>Role: <b>{p.role}</b></span>
          <span>Status: <b>{p.status}</b></span>
          <span>Tools: <b>{p.tools.join(', ')}</b></span>
        </div>
        <div className="buttons" style={{ marginTop: '10px' }}>
          <button className="btn btn-line" onClick={function () { openLink('repo', showMessage) }}>GitHub repo</button>
          <button className="btn btn-line" onClick={function () { openLink('demo', showMessage) }}>Live demo</button>
        </div>

        <div className="tabs" role="group" aria-label="Project sections">{tabButtons}</div>
        <div className="leaf" id="panel" aria-live="polite">{panel}</div>

        <div className="pager">
          <Link className="btn btn-line" to={'/projects/' + projects[prevIndex].id}>← Previous</Link>
          <Link className="btn" to={'/projects/' + projects[nextIndex].id}>Next →</Link>
        </div>
      </section>
    </main>
  )
}

function ProjectDetail({ showMessage }) {
  // the number in the address, like /projects/2
  var params = useParams()
  var id = parseInt(params.id)
  if (isNaN(id) || id < 1 || id > projects.length) {
    id = 1
  }

  // key={id} makes React start fresh (back on the Overview tab) for each project
  return <ProjectBody key={id} id={id} showMessage={showMessage} />
}

export default ProjectDetail
