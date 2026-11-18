import { moments } from '../data.js'
import { usePageTitle } from '../hooks.js'

function Achievements() {
  usePageTitle('Achievements - Lin Htut Win Alvin')

  var items = []
  for (var i = 0; i < moments.length; i++) {
    var m = moments[i]
    items.push(
      <article className="moment fade" key={i}>
        <div className="badge">{m.top}<br />{m.bottom}</div>
        <div><h3>{m.title}</h3><p>{m.text}</p></div>
      </article>
    )
  }

  return (
    <main>
      <section className="wrap page-top">
        <span className="small-tag">ACHIEVEMENTS</span>
        <h1>Things I'm proud of</h1>
        <p>A few moments from my first two years. I'll keep adding to this list.</p>
      </section>
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="moments">{items}</div>
      </section>
    </main>
  )
}

export default Achievements
