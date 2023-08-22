import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as Element
)

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
)
