import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Project from './components/Pages/Projects/Project.jsx'

const route = createBrowserRouter([
  {
  path:'/portfolio',
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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)