import React, { useState } from 'react'
import Logo from 'assets/images/image-removebg-preview.png'
import './off-canvas-styles.scss'
import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'

const OffCanvas: React.FC<{
    isOffCanvasMenu: boolean
    setIsOffCanvasMenu: (setIsOffCanvasMenu: boolean)  => void
}> = ({ isOffCanvasMenu, setIsOffCanvasMenu }) => {

    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (index: any) => {
        setActiveItem((prevActiveItem) => (prevActiveItem === index ? null : index))
    }

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
        { label: 'Blog', subItems: [{ label: 'Blog', link: '/blog' }, { label: 'Blog Details', link: '/blog-single' }] },
    ]

    return (
        <div className={`mobile-menu ${isOffCanvasMenu && 'show-menu'}`}>
            <nav className={`${!isOffCanvasMenu && 'nav-fade-active'} mobile-menu__wrapper`}>
                <div className="mobile-menu__header nav-fade">
                    <div className="logo">
                        <a href="/">
                            <img src={Logo} className="h-14" alt="" title="" />
                        </a>
                    </div>
                    <a onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)} aria-label="close mobile menu" className="close-mobile-menu">
                        {/*<i className="fa-light fa-xmark-large"></i>*/}
                        <i className="fa fa-light fa-xmark"></i>
                    </a>
                </div>
                <div className="mobile-menu__list">
                    <ul>
                        <li className="navbar__item navbar__item--has-children nav-fade">
                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Home</a>
                            <ul className="navbar__sub-menu navbar__sub-menu--lg">
                                <li>
                                    <a href="/">Creative Agency</a>
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
                        <li className="navbar__item navbar__item--has-children nav-fade">
                            <a aria-label="dropdown menu" className="navbar__dropdown-label">Blog</a>
                            <ul className="navbar__sub-menu">
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/blog-single">Blog Details</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu__options d-flex d-sm-none justify-content-center nav-fade">
                    <a href="/contact-us" className="btn btn--secondary">Let's Talk</a>
                </div>
                <div className="mobile-menu__social social nav-fade">
                    <SocialMenuList />
                </div>
            </nav>
        </div>
    )
}

export default OffCanvas
