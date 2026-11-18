import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { fadeInOnScroll } from './utils.js'

import Stars from './components/Stars.jsx'
import XpBar from './components/XpBar.jsx'
import Navbar from './components/Navbar.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Achievements from './pages/Achievements.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  var location = useLocation()

  // the small message at the bottom of the screen
  var [message, setMessage] = useState('')
  var [messageShow, setMessageShow] = useState(false)
  var messageTimer = useRef(null)

  function showMessage(text) {
    setMessage(text)
    setMessageShow(true)
    clearTimeout(messageTimer.current)
    messageTimer.current = setTimeout(function () {
      setMessageShow(false)
    }, 3000)
  }

  // every new page starts at the top
  useEffect(function () {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  // fade things in when the page opens and when you scroll
  useEffect(function () {
    fadeInOnScroll()
    window.addEventListener('scroll', fadeInOnScroll)
    return function () {
      window.removeEventListener('scroll', fadeInOnScroll)
    }
  }, [location.pathname])

  return (
    <>
      <Stars />
      <XpBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About showMessage={showMessage} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail showMessage={showMessage} />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact showMessage={showMessage} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div id="message" className={messageShow ? 'message show' : 'message'} role="status" aria-live="polite">{message}</div>
    </>
  )
}

export default App
