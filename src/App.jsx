import React from 'react'
import style from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Team from './Component/Team/Team';
import Contact from './Component/Contact/Contact';
export default function App() {

let routers = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    {index: true, element: <Home/>},
    {path:"about", element: <About/>},
    {path:"services", element: <Services/>},
    {path:"team", element: <Team/>},
    {path:"contact", element: <Contact/>},
  ]},
]);

  return <>
    <RouterProvider router={routers} />
  </>
  
}
