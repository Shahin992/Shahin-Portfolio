import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx'
import Root from './Root/Root.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    //  errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      // {
      //   path: "/about",
      //   element : <About></About>
      // },
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} /> 
     
     
     
     
  </React.StrictMode>,
)
