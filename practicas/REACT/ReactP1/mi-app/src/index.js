import React from 'react'
import ReactDOM from 'react-dom/client'

const appDomElement = document.getElementById('root')

const raiz = ReactDOM.createRoot(appDomElement)

const boton1 = React.createElement('button', { 'id':'titulo' }, 'boton 1')
const boton2 = React.createElement('button', { 'id':'titulo' }, 'boton 2')
const boton3 = React.createElement('button', { 'id':'titulo' }, 'boton 3')

const app = React.createElement(React.Fragment, null, [boton1,boton2,boton3])

raiz.render(app)




