import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../Components/Shared/TopBar'
import Footer from '../Components/Shared/Footer'
const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
