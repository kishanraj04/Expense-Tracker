import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Expenses from './components/Expenses.jsx'


const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Expenses/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)