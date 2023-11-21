import React, { useState, useEffect } from 'react'
import './header-styles.scss'
import Logo from 'assets/For Web/svg/Color logo - no background.svg'
import OffCanvasNav from './off-canvas-nav/OffCanvasNav'

function Header() {
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
    console.log(isOffCanvasMenu, 'isOffCanvasMenu')
    return (
        <>
            {
                isOffCanvasMenu ? (
                    <header className="header">
                        <div className={`primary-navbar secondary--navbar ${navbarClasses}`}>
                            <div className="container px-4">
                                <div className="row">
                                    <div className="w-full">
                                        <nav className="navbar p-0">
                                            <div className="navbar__logo">
                                                <a href="#" aria-label="go to home">
                                                    <img src={Logo} className="h-12" alt="Image" />
                                                </a>
                                            </div>
                                            <div className="navbar__options">
                                                <button onClick={() => setIsOffCanvasMenu(false)} className="open-offcanvas-nav flex" aria-label="toggle mobile menu" title="open offcanvas menu"></button>
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

export default Header
