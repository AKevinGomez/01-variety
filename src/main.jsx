import React from 'react'
import ReactDOM from 'react-dom/client'
import'../../../reset.css'
import './index.css'
import { App } from './App'
import { TwitterFollowCard } from './twiiter-follow-card'

const ruta = ReactDOM.createRoot(document.getElementById('root'))





ruta.render(<>
    <App />
    <TwitterFollowCard />
</>
)
