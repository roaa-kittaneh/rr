import React from 'react'
import Navbar from '../componant/dashboard/navbar/Navbar.jsx'
import Footer from '../componant/dashboard/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function DashboardLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
