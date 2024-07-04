import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// This is our component tree that is being rendered bu the DOM. Remember! Message.tsx and App.tsx!
// StrictMode exists to identify problems

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
