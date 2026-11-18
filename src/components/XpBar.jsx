import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// The bar at the top fills up as you scroll down the page
function XpBar() {
  var [percent, setPercent] = useState(0)
  var location = useLocation()

  useEffect(function () {
    function updateXpBar() {
      var total = document.documentElement.scrollHeight - window.innerHeight
      var p = 0
      if (total > 0) {
        p = (window.scrollY / total) * 100
      }
      setPercent(p)
    }

    updateXpBar()
    window.addEventListener('scroll', updateXpBar)
    window.addEventListener('resize', updateXpBar)
    return function () {
      window.removeEventListener('scroll', updateXpBar)
      window.removeEventListener('resize', updateXpBar)
    }
  }, [location.pathname]) // work it out again on every new page

  return (
    <div className="xp" aria-hidden="true">
      <i id="xp-fill" style={{ width: percent + '%' }}></i>
    </div>
  )
}

export default XpBar
