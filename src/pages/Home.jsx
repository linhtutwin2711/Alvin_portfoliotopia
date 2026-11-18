import { Link } from 'react-router-dom'
import { skills } from '../data.js'
import { usePageTitle } from '../hooks.js'
import BootScreen from '../components/BootScreen.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'

function Home() {
  usePageTitle('Lin Htut Win Alvin - Portfolio')

  var pills = []
  for (var i = 0; i < skills.length; i++) {
    pills.push(<li key={i}>{skills[i]}</li>)
  }

  return (
    <>
      <BootScreen />

      <main>
        <section className="wrap hero">
          <div>
            <span className="small-tag">LEVEL 2 · YEAR 2 STUDENT</span>
            <p className="hello">Hi there, I'm</p>
            <h1>Lin Htut Win <span className="name">Alvin</span></h1>
            <p className="intro">I'm a Year 2 Diploma in IT student at Republic Polytechnic in Singapore. I like building websites and making them easy and nice to use. Right now I'm learning mobile app development and cloud app development, with a little bit of DevOps.</p>
            <div className="buttons">
              <Link className="btn" to="/projects"><span className="ico">▶</span> Explore my projects</Link>
              <Link className="btn btn-line" to="/contact"><span className="hand">👋</span> Say hello</Link>
            </div>
          </div>
          <aside className="ach-card">
            <div className="ach-avatar">
              <img src="/images/photo-circle.jpg" alt="Photo of Lin Htut Win Alvin" />
            </div>
            <h2>Achievements</h2>
            <Link className="ach-item" to="/achievements">🥈 BrainHack 2026 First Runner-up</Link>
            <Link className="ach-item" to="/achievements">🌐 Built Study Log (full-stack)</Link>
            <Link className="ach-item" to="/achievements">🎓 Year 2 at Republic Polytechnic</Link>
          </aside>
        </section>

        <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 35 C 240 80 480 0 720 35 S 1200 70 1440 25 V70 H0 Z" fill="#111830" /></svg>

        <div className="band">
          <section className="wrap section" style={{ paddingTop: '20px' }}>
            <h2 className="fade">What I work with</h2>
            <ul className="pills fade">{pills}</ul>
          </section>
        </div>

        <section className="wrap section">
          <h2 className="fade">Projects I'm proud of</h2>
          <p className="fade">Click a project to see the problem, how I built it and what happened. <Link to="/projects" style={{ color: 'var(--coral)' }}>See all projects</Link></p>
          <ProjectGrid type="all" maxCount={2} />
        </section>

        <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 35 C 240 80 480 0 720 35 S 1200 70 1440 25 V70 H0 Z" fill="#111830" /></svg>

        <div className="band">
          <section className="wrap section" style={{ paddingTop: '20px' }}>
            <h2 className="fade">My journey so far</h2>
            <div className="journey-wrap fade">
              <svg className="line" viewBox="0 0 1100 130" preserveAspectRatio="none" aria-hidden="true"><path d="M183 27 C 330 27, 400 77, 550 77 S 770 27, 917 27" fill="none" stroke="#4C6FFF" strokeWidth="3" strokeDasharray="8 8" /></svg>
              <ol className="journey">
                <li><div className="dot">1</div><h3>Year 1: the basics</h3><p>I learned programming, databases and how websites work.</p></li>
                <li><div className="dot">2</div><h3>Year 2: real projects</h3><p>I built a library loan system and a supermarket app, and tried automation and data analytics.</p></li>
                <li><div className="dot">3</div><h3>Next: an internship</h3><p>I want to join a team and work on mobile or cloud app development.</p></li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
