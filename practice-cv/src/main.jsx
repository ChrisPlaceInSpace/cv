import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/main.css'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import ErrorPage from './Components/errorPage.jsx'
import Home from './Components/home/home.jsx'
import EnterSite from './Components/enterSite.jsx'
import Contact from './Components/contact/contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <EnterSite/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/home',
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  // {
  //   path: 'playroom',
  //   element: <PlayRoom/>,
  //   errorElement: <ErrorPage/>
  // },
  {
    path: '/contact',
    element: <Contact/>,
    errorElement: <ErrorPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
)
