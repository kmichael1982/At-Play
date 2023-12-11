import React, { useEffect, useState } from 'react'

import { Buttons } from 'shared/ui/buttons/ButtonUi'
import AccordionItem from './off-canvas-nav/acordion-item/AccordionItem'
import OffCanvas from './off-canvas/OffCanvas'
import { menuItems } from './menuItems'

import Logo from 'assets/images/image-removebg-preview.png'
import './header-styles.scss'

const Header = () => {
    const [ isScrolled, setIsScrolled ] = useState(false)
    const [ isOffCanvasMenu, setIsOffCanvasMenu ] = useState(false)

    const [ activeItem, setActiveItem ] = useState<number | null>(null)

    const handleItemClick = (index: number | null) => {
        setActiveItem((prevActiveItem) => (prevActiveItem === index ? null : index))
    }

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
        <header className="header">
            <div className={`primary-navbar cmn-nav ${navbarClasses}`}>
                <div className="container px-4">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar p-0">
                                <div className="navbar__logo">
                                    <a href="/" aria-label="go to home">
                                        <img src={Logo} className="h-14" alt="Image" />
                                    </a>
                                </div>
                                <div className="navbar__menu">
                                    <ul>
                                        {menuItems.map((item, index) => {
                                            console.log(item)
                                            return (
                                                <AccordionItem
                                                    key={index}
                                                    label={item.label}
                                                    link={item.link || ''}
                                                    subItems={item.subItems || []}
                                                    isActive={activeItem === index}
                                                    setActiveItem={setActiveItem}
                                                    onClick={() => handleItemClick(index)}
                                                    elemIndex={index}
                                                />
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="navbar__options">
                                    <div className="navbar__mobile-options d-none d-sm-flex">
                                        <Buttons title="Let's Talk" href="/contact-us"/>
                                    </div>
                                    <button
                                        onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)}
                                        className="open-mobile-menu d-flex d-xl-none"
                                        aria-label="toggle mobile menu"
                                    >
                                        <i className="fa-solid fa-bars-staggered"></i>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <OffCanvas
                    isOffCanvasMenu={isOffCanvasMenu}
                    setIsOffCanvasMenu={setIsOffCanvasMenu}
                />
                <div
                    className={`mobile-menu__backdrop ${isOffCanvasMenu && 'mobile-menu__backdrop-active'}`}
                    onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)}
                ></div>
            </div>
        </header>
    )
}

export default Header
