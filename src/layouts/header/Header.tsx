import React, { useEffect, useState } from 'react'
import Logo from 'assets/images/image-removebg-preview.png'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import OffCanvas from './off-canvas/OffCanvas'
import './header-styles.scss'

const Header = () => {
    const [ isScrolled, setIsScrolled ] = useState(false)
    const [ isOffCanvasMenu, setIsOffCanvasMenu ] = useState(false)

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

    const menuItems = [
        {
            label: 'Home',
            subItems: [
                {
                    label: 'Creative Agency',
                    link: ''
                },

                {
                    label: 'Creative Agency Light',
                    link: ''
                },

                {
                    label: 'Digital Agency',
                    link: ''
                },

                {
                    label: 'Digital Agency Light',
                    link: ''
                },

                {
                    label: 'It Solution',
                    link: ''
                },

                {
                    label: 'It Solution Light',
                    link: ''
                },

                {
                    label: 'Personal Portfolio',
                    link: ''
                },

                {
                    label: 'Personal Portfolio Light',
                    link: ''
                },

                {
                    label: 'Interactive Portfolio',
                    link: ''
                },

                {
                    label: 'Interactive Portfolio Light',
                    link: ''
                }
            ]
        },
        { label: 'About Us' },
        { label: 'Services', subItems: [{ label: 'Our Services', link: '' }, { label: 'Service Details', link: '' }] },
        { label: 'Projects', subItems: [{ label: 'Our Projects', link: '' }, { label: 'Project Details', link: '' }] },
        {
            label: 'Pages',
            subItems: [
                {
                    label: 'Creative Agency',
                    link: ''
                },

                {
                    label: 'Error',
                    link: ''
                },

                {
                    label: 'Our Story',
                    link: ''
                },

                {
                    label: 'Portfolio',
                    link: ''
                }
            ]
        },
        { label: 'Journal', subItems: [{ label: 'Journal', link: '/blog' }, { label: 'Journal Details', link: '/blog-single' }] },
    ]

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
                                        <li className="navbar__item navbar__item--has-children nav-fade" >
                                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Home</a>
                                            <ul className="navbar__sub-menu navbar__sub-menu--lg">
                                                <li>
                                                    <a href="/index">Creative Agency</a>
                                                </li>
                                                <li>
                                                    <a href="/index-light">Creative Agency Light</a>
                                                </li>
                                                <li>
                                                    <a href="/index-two">Digital Agency</a>
                                                </li>
                                                <li>
                                                    <a href="/index-two-light">Digital Agency Light</a>
                                                </li>
                                                <li>
                                                    <a href="/index-three">It Solution</a>
                                                </li>
                                                <li>
                                                    <a href="/index-three-light">It Solution Light</a>
                                                </li>
                                                <li>
                                                    <a href="/index-four">Personal Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="/index-four-light">Personal Portfolio Light</a>
                                                </li>
                                                <li>
                                                    <a href="/index-five">Interactive Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="/index-five-light">Interactive Portfolio Light</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item nav-fade">
                                            <a href="/about-us">About Us</a>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Services</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="/our-services">Our Services</a>
                                                </li>
                                                <li>
                                                    <a href="/service-single">Service Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Projects</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="/our-projects">Our Projects</a>
                                                </li>
                                                <li>
                                                    <a href="/project-single">Project Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Pages</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="/faq">FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="/error">Error</a>
                                                </li>
                                                <li>
                                                    <a href="/our-story">Our Story</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio">Portfolio</a>
                                                </li>
                                                <li className="navbar__item navbar__item--has-children">
                                                    <a aria-label="dropdown menu" className="navbar__dropdown-label navbar__dropdown-label-sub">Team</a>
                                                    <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                        <li>
                                                            <a href="/our-teams">Our Teams</a>
                                                        </li>
                                                        <li>
                                                            <a href="/team-single">Team Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/client-feedback">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="/contact-us">Contact Us</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade" >
                                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Journal</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="/blog">Journal</a>
                                                </li>
                                                <li>
                                                    <a href="/blog-single">Journal Details</a>
                                                </li>
                                            </ul>
                                        </li>
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
                                        {/*<i className="fa-light fa-bars-staggered"></i>*/}
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
