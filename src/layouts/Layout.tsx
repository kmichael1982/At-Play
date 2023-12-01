import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header/Header'
import Footer from './footer/Footer'

interface LayoutProps {
    isFirst?: boolean
}

export const Layout:React.FC<LayoutProps> = ({isFirst }) => {
    return (
       <>
           {isFirst && <Header />}
           <Outlet />
           {isFirst && <Footer />}
       </>
    )
}