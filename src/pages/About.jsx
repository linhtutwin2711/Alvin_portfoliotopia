import { Link } from 'react-router-dom'
import { bubbles, certs, openLink } from '../data.js'
import { usePageTitle } from '../hooks.js'

// The credentials box (looks like a game save file)
function Vault() {
  var done = 0
  var now = 0
  var items = []
  for (var i = 0; i < certs.length; i++) {
    var c = certs[i]
    var mark = ''
    if (c.state === 'done') { mark = '✓'; done++ }
    if (c.state === 'now') { now++ }
    items.push(
      <li className={'cert ' + c.state} key={i}>
        <span className="cert-tag">{c.tag}</span>
        <div className="cert-text"><b>{c.title}</b><small>{c.by}</small></div>
        <span className="cert-mark">{mark}</span>
      </li>
    )
  }
  // a finished one counts fully, one in progress counts half
  var percent = ((done + now / 2) / certs.length) * 100

  return (
    <section className="vault" aria-label="Credentials">
      <div className="vault-top">
        <span className="vault-file">CERTS.DAT</span>
        <span className="vault-count" id="vault-count">{done + ' earned · ' + now + ' in progress'}</span>
      </div>
      <h3>Credentials</h3>
      <div className="vault-bar" aria-hidden="true"><i id="vault-fill" style={{ width: percent + '%' }}></i></div>
      <ul className="vault-list" id="vault-list">{items}</ul>
    </section>
  )
}

function About({ showMessage }) {
  usePageTitle('About - Lin Htut Win Alvin')

  var bubbleItems = []
  for (var i = 0; i < bubbles.length; i++) {
    var b = bubbles[i]
    var cls = ''
    if (b.learning) { cls = 'learning' }
    bubbleItems.push(<li className={cls} style={{ '--s': b.size + 'px' }} key={i}>{b.name}</li>)
  }

  return (
    <main>
      <section className="wrap about">
        <div>
          <div className="photo-wrap">
            <img src="/images/photo-about.jpg" alt="Photo of Lin Htut Win Alvin" />
          </div>
          <ul className="facts">
            <li>Year <b>Year 2</b></li>
            <li>Where <b>Singapore</b></li>
            <li>School <b>Republic Poly</b></li>
          </ul>
          <div className="buttons"><button className="btn" onClick={function () { openLink('cv', showMessage) }}>Download CV</button></div>

          <Vault />
        </div>

        <div>
          <span className="small-tag">ABOUT ME</span>
          <h1>Hello, I'm Alvin.</h1>
          <p>I'm studying a Diploma in Information Technology at Republic Polytechnic. In class I've worked on databases, web apps, automation and design, and my favourite moment is when a rough idea finally starts working.</p>
          <p>I want to work in mobile and cloud app development, with a little bit of DevOps. I care about small things like spacing, colours and how an app feels when you use it.</p>
          <p>I used a game theme for this website because I see every project as another level I've cleared.</p>

          <h2 style={{ marginTop: '44px' }}>What I work with</h2>
          <p>The solid circles are what I use most. The dashed ones are what I'm still learning.</p>
          <ul className="bubbles">{bubbleItems}</ul>

          <h2 style={{ marginTop: '44px' }}>What I'm looking for</h2>
          <p>An internship where I can learn from a team and build real apps in mobile or cloud app development.</p>
          <div className="buttons"><Link className="btn btn-line" to="/contact">Get in touch</Link></div>
        </div>
      </section>
    </main>
  )
}

export default About
