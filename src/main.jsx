import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/bootstrap.min.css"
import "./font-awesome-4.7.0/css/font-awesome.min.css"
import "./css/style.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
