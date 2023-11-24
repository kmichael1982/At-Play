import React, { useEffect, useState } from 'react'
import Logo from 'assets/images/image-removebg-preview.png'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import './header-styles.scss'

const Header = () => {
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
                        <div className={`primary-navbar cmn-nav ${navbarClasses}`}>
                            <div className="container px-4">
                                <div className="row">
                                    <div className="w-full">
                                        <nav className="navbar p-0">
                                            <div className="navbar__logo">
                                                <a href="/" aria-label="go to home">
                                                    <img src={Logo} className="h-14" alt="Image" />
                                                </a>
                                            </div>
                                            <div className="navbar__menu">
                                            </div>
                                            <div className="navbar__options">
                                                <div className="navbar__mobile-options d-none d-sm-flex">
                                                    <Buttons title="Let's Talk" href="/contact-us"/>
                                                </div>
                                                <button className="open-mobile-menu d-flex d-xl-none" aria-label="toggle mobile menu">
                                                    <i className="fa-light fa-bars-staggered"></i>
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                ) : <></>
            }
        </>
    )
}

export default Header
