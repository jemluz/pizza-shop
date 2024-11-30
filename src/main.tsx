import './global.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { enableMSW } from './api/mocks'
import { App } from './app'

enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
