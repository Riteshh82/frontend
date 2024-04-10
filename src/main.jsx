import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Project from './components/Pages/Project/Project.jsx';
import About from './components/Pages/About/About.jsx'

const route = createBrowserRouter([
  {
  path:'/',
  element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/project',
    element:<Project/>
  },
  {
    path:'/about',
    element:<About/>
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)