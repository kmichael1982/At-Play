import React, { useEffect, useState } from 'react'
import OffCanvasNav from '../off-canvas-nav/OffCanvasNav'

import Logo from 'assets/images/image-removebg-preview.png'

const PrimaryNavbar = () => {
    const [ isScrolled, setIsScrolled ] = useState(false)
    const [ isOffCanvasMenu, setIsOffCanvasMenu ] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0
            setIsScrolled(scrolled)
       }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navbarClasses = `${isScrolled ? 'navbar-active' : ''}`

    return (
        <>
            {
                isOffCanvasMenu ? (
                    <header className="header">
                        <div className={`primary-navbar secondary--navbar ${navbarClasses}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <nav className="navbar p-0">
                                            <div className="navbar__logo">
                                                <a href="#" aria-label="go to home">
                                                    <img src={Logo} className="h-lg-16 h-12" alt="Image" />
                                                </a>
                                            </div>
                                            <div className="navbar__options">
                                                <button
                                                    onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)}
                                                    className="open-offcanvas-nav flex"
                                                    aria-label="toggle mobile menu"
                                                    title="open offcanvas menu"
                                                ></button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                ) : <OffCanvasNav isOffCanvasMenu={isOffCanvasMenu} setIsOffCanvasMenu={setIsOffCanvasMenu}/>
            }
        </>
    )
}
export default PrimaryNavbar
