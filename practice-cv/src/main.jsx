import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/main.css'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import ErrorPage from './Components/errorPage.jsx'
import Home from './Components/home.jsx'
import EnterSite from './Components/enterSite.jsx'
import CV from './Components/cv.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <EnterSite/>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'home',
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'cv',
    element: <CV/>,
    errorElement: <ErrorPage/>
  },
  // {
  //   path: 'playroom',
  //   element: <PlayRoom/>,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: 'contact',
  //   element: <Contact/>,
  //   errorElement: <ErrorPage/>
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
)
