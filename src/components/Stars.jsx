import { useEffect, useRef } from 'react'
import { reduceMotion } from '../utils.js'

// The starry background. It floats behind every page.
function Stars() {
  var canvasRef = useRef(null)

  useEffect(function () {
    var canvas = canvasRef.current
    var ctx = canvas.getContext('2d')
    var stars = []
    var frameId = 0

    // make 90 stars at random places
    for (var i = 0; i < 90; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.0004 + 0.00008,
        coral: Math.random() > 0.8
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i]
        if (!reduceMotion) {
          s.y = s.y - s.speed // stars float slowly upwards
          if (s.y < 0) {
            s.y = 1
          }
        }
        ctx.globalAlpha = 0.35 + s.size / 4
        if (s.coral) {
          ctx.fillStyle = '#FF9F7A'
        } else {
          ctx.fillStyle = '#F4F6FF'
        }
        ctx.fillRect(s.x * canvas.width, s.y * canvas.height, s.size, s.size)
      }
      if (!reduceMotion) {
        frameId = requestAnimationFrame(draw)
      }
    }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (reduceMotion) {
        draw() // still stars need to be drawn again after a resize
      }
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    // clean up when the component goes away
    return function () {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas id="stars" ref={canvasRef} aria-hidden="true"></canvas>
}

export default Stars
