import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  var [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  // close the phone menu when you click a link
  function closeMenu() {
    setMenuOpen(false)
  }

  // NavLink adds the "active" class (and aria-current) for the page you are on.
  // "end" on Home stops it from being active on every page.
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main menu">
        <Link className="logo" to="/" onClick={closeMenu} aria-label="Lin Htut Win Alvin - home">
          <img src="/images/logo-clean.png" alt="Lin Htut Win Alvin logo" />
        </Link>
        <button className="menu-btn" id="menu-btn" aria-controls="menu" onClick={toggleMenu}>Menu</button>
        <ul id="menu" className={menuOpen ? 'open' : ''} onClick={closeMenu}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/achievements">Achievements</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
