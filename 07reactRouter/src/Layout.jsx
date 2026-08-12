import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>   
    <Footer/>       
    </>
  )
}

export default Layout


  {/* Outlet acts as a placeholder for child routes  outlest act as a base and it sets it iske uapr aur neche ki cheze change hongia ur beech ki same rahengi*/}
