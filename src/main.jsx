import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Problematica from './Pages/Problematica/problematica.jsx'
import Solucao from './Pages/Solucao/Solucao.jsx'
import Validacao from './Pages/Validacao/Validacao.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/Problematica',
    element: <Problematica />
  },
  {
    path:'/Solucao',
    element: <Solucao />
  },
  {
    path:'/Validacao',
    element:<Validacao />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
