import React from 'react'
import style from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
export default function App() {

let routers = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    {index: true, element: <Home/>},
    {path:"about", element: <About/>},
    {path:"services", element: <Services/>},
  ]},
]);

  return <>
    <RouterProvider router={routers} />
  </>
  
}
