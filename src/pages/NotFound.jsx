import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks.js'

// Shown when the address does not match any page
function NotFound() {
  usePageTitle('Page not found - Lin Htut Win Alvin')

  return (
    <main>
      <section className="wrap page-top">
        <span className="small-tag">GAME OVER</span>
        <h1>Page not found</h1>
        <p>This level does not exist yet. Let's go back to the start.</p>
        <div className="buttons"><Link className="btn" to="/">Back to home</Link></div>
      </section>
    </main>
  )
}

export default NotFound
