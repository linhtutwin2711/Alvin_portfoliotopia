import { useEffect, useRef, useState } from 'react'
import { reduceMotion } from '../utils.js'

var messages = ['LOADING PLAYER 1...', 'LOADING SKILLS...', 'LOADING PROJECTS...', 'READY!']

// Did the visitor already press start in this visit?
function alreadySeen() {
  try {
    return sessionStorage.getItem('bootSeen') === 'yes'
  } catch {
    return false
  }
}

// Loading screen (home page only, once per visit)
// status is '' while loading, 'ready' when the button shows, 'gone' when closed
function BootScreen() {
  var startSeen = alreadySeen() || reduceMotion
  var [status, setStatus] = useState(startSeen ? 'gone' : '')
  var [percent, setPercent] = useState(0)
  var buttonRef = useRef(null)

  function closeBoot() {
    setStatus('gone')
    try {
      sessionStorage.setItem('bootSeen', 'yes')
    } catch {
      // it is fine if the browser does not allow this
    }
  }

  // stop the page from scrolling while the loading screen is open
  useEffect(function () {
    if (status !== 'gone') {
      document.body.classList.add('booting')
    } else {
      document.body.classList.remove('booting')
    }
    return function () {
      document.body.classList.remove('booting')
    }
  }, [status])

  // fill the loading bar
  useEffect(function () {
    if (startSeen) {
      return
    }
    var p = 0
    var timer = setInterval(function () {
      p = p + 12.5
      setPercent(p)
      if (p >= 100) {
        clearInterval(timer)
        setStatus('ready')
      }
    }, 220)
    return function () {
      clearInterval(timer)
    }
  }, [startSeen])

  // when it is ready: focus the button and let Enter close the screen
  useEffect(function () {
    if (status !== 'ready') {
      return
    }
    buttonRef.current.focus()
    function onKey(e) {
      if (e.key === 'Enter') {
        closeBoot()
      }
    }
    document.addEventListener('keydown', onKey)
    return function () {
      document.removeEventListener('keydown', onKey)
    }
  }, [status])

  var n = Math.floor(percent / 26)
  if (n > 3) {
    n = 3
  }

  return (
    <div id="boot" className={status} role="dialog" aria-label="Loading">
      <div>
        <img src="/images/logo-clean.png" alt="Lin Htut Win Alvin logo" />
        <div className="boot-bar" aria-hidden="true">
          <i style={{ width: percent + '%' }}></i>
        </div>
        <p id="boot-text">{messages[n]}</p>
        <button className="btn" id="start-btn" type="button" ref={buttonRef} onClick={closeBoot}>PRESS START</button>
      </div>
    </div>
  )
}

export default BootScreen
