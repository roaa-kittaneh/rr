import React from 'react'
import Navbar from '../componant/web/navbar/Navbar.jsx'
import Footer from '../componant/web/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   
   </>
  )
}
