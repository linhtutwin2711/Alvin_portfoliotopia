import { useState } from 'react'
import { openLink } from '../data.js'
import { usePageTitle } from '../hooks.js'

// the three boxes in the form
var fields = [
  { id: 'name', label: 'Your name', type: 'text', auto: 'name', error: 'Please enter your name.' },
  { id: 'email', label: 'Your email', type: 'email', auto: 'email', error: 'Please enter a valid email.' },
  { id: 'msg', label: 'Message', type: 'textarea', auto: 'off', error: 'Please write a short message.' }
]

var emptyValues = { name: '', email: '', msg: '' }

function Contact({ showMessage }) {
  usePageTitle('Contact - Lin Htut Win Alvin')

  var [values, setValues] = useState(emptyValues)
  var [errors, setErrors] = useState({})

  // runs every time someone types in a box
  function handleChange(e) {
    var copy = { ...values }
    copy[e.target.id] = e.target.value
    setValues(copy)
  }

  // Contact form check (it does not send anything yet)
  function handleSubmit(e) {
    e.preventDefault()
    var allGood = true
    var newErrors = {}
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i]
      var value = values[f.id].trim()
      var bad = (value === '')
      if (f.type === 'email' && value !== '' && value.indexOf('@') === -1) {
        bad = true
      }
      newErrors[f.id] = bad
      if (bad) {
        allGood = false
      }
    }
    setErrors(newErrors)
    if (allGood) {
      setValues(emptyValues)
      showMessage('Thanks! Your message was received (demo).')
    }
  }

  var rows = []
  for (var i = 0; i < fields.length; i++) {
    var f = fields[i]
    var input
    if (f.type === 'textarea') {
      input = <textarea id={f.id} name="message" value={values[f.id]} onChange={handleChange}></textarea>
    } else {
      input = <input id={f.id} name={f.id} type={f.type} autoComplete={f.auto} value={values[f.id]} onChange={handleChange} />
    }
    var rowClass = 'row'
    if (errors[f.id]) { rowClass = 'row has-error' }
    rows.push(
      <div className={rowClass} key={f.id}>
        <label htmlFor={f.id}>{f.label}</label>
        {input}
        <div className="error">{f.error}</div>
      </div>
    )
  }

  return (
    <main>
      <section className="wrap page-top">
        <div className="contact">
          <div>
            <span className="small-tag">CONTACT</span>
            <h1>Let's talk</h1>
            <p>Looking for an intern, a teammate or someone to build something with? Send me a message, I'd love to hear from you.</p>
            <div className="link-list">
              <button onClick={function () { openLink('github', showMessage) }}>GitHub<small>See my code</small></button>
              <button onClick={function () { openLink('linkedin', showMessage) }}>LinkedIn<small>Connect with me</small></button>
              <button onClick={function () { openLink('email', showMessage) }}>Email<small>Write to me directly</small></button>
            </div>
          </div>

          <form className="leaf" id="form" noValidate onSubmit={handleSubmit}>
            {rows}
            <button className="btn" type="submit">Send message</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
