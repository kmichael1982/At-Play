import React, { useState } from 'react'
import Logo from 'assets/For Web/png/Color logo - no background.png'
import { Buttons, SocialLinkButton } from 'shared/ui/buttons/ButtonUi'
import AccordionItem from './acordion-item/AccordionItem'

const OffCanvasNav: React.FC<{
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
        { label: 'Blog', subItems: [{ label: 'Blog', link: 'blog.html' }, { label: 'Blog Details', link: 'blog-single.html' }] },
    ];

    return (
        <div className="offcanvas-nav">
            <div className={`${!isOffCanvasMenu && 'show-offcanvas-menu'}  offcanvas-menu`}>
                <nav className="offcanvas-menu__wrapper">
                    <div className="offcanvas-menu__header nav-fade" style={{animationDelay: '1s'}}>
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} className="h-12" alt="" title="" />
                            </a>
                        </div>
                        <a onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)} aria-label="close offcanvas menu" className="close-offcanvas-menu">
                            <i className="fa fa-light fa-xmark"></i>
                        </a>
                    </div>
                    <div className="offcanvas-menu__list">
                        <div className="navbar__menu">
                            {/*<ul>*/}
                            {/*    {menuItems.map((item, index) => (*/}
                            {/*        <AccordionItem*/}
                            {/*            key={index}*/}
                            {/*            label={item.label}*/}
                            {/*            subItems={item.subItems || []}*/}
                            {/*            isActive={activeItem === index}*/}
                            {/*            onClick={() => handleItemClick(index)}*/}
                            {/*        />*/}
                            {/*    ))}*/}
                            {/*</ul>*/}

                            <ul>
                                <li className="navbar__item navbar__item--has-children nav-fade" style={{animationDelay: '1.2s'}}>
                                    <a href="javascript:void(0)" aria-label="dropdown menu" className="flex navbar__dropdown-label ">Home</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="index.html">Creative Agency</a>
                                        </li>
                                        <li>
                                            <a href="index-light.html">Creative Agency Light</a>
                                        </li>
                                        <li>
                                            <a href="index-two.html">Digital Agency</a>
                                        </li>
                                        <li>
                                            <a href="index-two-light.html">Digital Agency Light</a>
                                        </li>
                                        <li>
                                            <a href="index-three.html">It Solution</a>
                                        </li>
                                        <li>
                                            <a href="index-three-light.html">It Solution Light</a>
                                        </li>
                                        <li>
                                            <a href="index-four.html">Personal Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="index-four-light.html">Personal Portfolio Light</a>
                                        </li>
                                        <li>
                                            <a href="index-five.html">Interactive Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="index-five-light.html">Interactive Portfolio Light</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item nav-fade" style={{animationDelay: '1.4s'}}>
                                    <a href="about-us.html" className="flex navbar__dropdown-label">About Us</a>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade" style={{animationDelay: '1.6s'}}>
                                    <a href="javascript:void(0)" aria-label="dropdown menu" className="flex navbar__dropdown-label">Services</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="our-services.html">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="service-single.html">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade" style={{animationDelay: '1.8s'}}>
                                    <a href="javascript:void(0)" aria-label="dropdown menu" className="flex navbar__dropdown-label">Projects</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="our-projects.html">Our Projects</a>
                                        </li>
                                        <li>
                                            <a href="project-single.html">Project Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade" style={{animationDelay: '2s'}} >
                                    <a href="javascript:void(0)" aria-label="dropdown menu" className="flex navbar__dropdown-label">Pages</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="404.html">Error</a>
                                        </li>
                                        <li>
                                            <a href="our-story.html">Our Story</a>
                                        </li>
                                        <li>
                                            <a href="portfolio.html">Portfolio</a>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children">
                                            <a href="javascript:void(0)" aria-label="dropdown menu" className=" flex navbar__dropdown-label navbar__dropdown-label-sub">Team</a>
                                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                <li>
                                                    <a href="our-teams.html">Our Teams</a>
                                                </li>
                                                <li>
                                                    <a href="team-single.html">Team Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="client-feedback.html">Testimonials</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade" style={{animationDelay: '2.2s'}} >
                                    <a href="javascript:void(0)" aria-label="dropdown menu" className="flex navbar__dropdown-label navbar__item-active">Blog</a>
                                    <ul className="navbar__sub-menu flex">
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-single.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="offcanvas-menu__options nav-fade" style={{animationDelay: '2.4s'}}>
                        <Buttons href="/contact-us" title="Let's Talk"/>
                    </div>
                    <div className="offcanvas-menu__social social nav-fade" style={{animationDelay: '2.6s'}}>
                        <SocialLinkButton
                            href="https://www.facebook.com/"
                            icon={<i className="fa-brands fa-facebook-f"></i>}
                        />
                        <SocialLinkButton
                            href="https://www.twitter.com/"
                            icon={<i className="fa-brands fa-twitter"></i>}
                        />

                        <SocialLinkButton
                            href="https://www.pinterest.com/"
                            icon={<i className="fa-brands fa-linkedin-in"></i>}
                        />

                        <SocialLinkButton
                            href="https://www.instagram.com/"
                            icon={<i className="fa-brands fa-instagram"></i>}
                        />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default OffCanvasNav
