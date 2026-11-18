import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// fonts (these replace the Google Fonts link from the HTML version)
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/space-grotesk/latin-500.css'
import '@fontsource/space-grotesk/latin-700.css'
import '@fontsource/press-start-2p/latin-400.css'

// the same style.css as the HTML version
import './style.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
