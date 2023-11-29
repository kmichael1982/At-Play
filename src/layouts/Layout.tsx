import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'

export const Layout:React.FC<{
    isFirst?: boolean
}>= ({isFirst }) => {
    return (
       <>
           {isFirst && <Header />}
           <Outlet />
           {isFirst && <Footer />}
       </>
    )
}