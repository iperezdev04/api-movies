import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from './context/Apicontext.jsx'


import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ApiProvider>
        <Router>
            <App />
        </Router>
    </ApiProvider>

)
