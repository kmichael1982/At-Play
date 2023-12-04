import React, { useState } from 'react'
import Logo from 'assets/images/image-removebg-preview.png'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import AccordionItem from './acordion-item/AccordionItem'
import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'

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
        { label: 'Services', subItems: [{ label: 'Our Services', link: '/our-services' }, { label: 'Service Details', link: '' }] },
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
        <div className="offcanvas-nav">
            <div className={`${!isOffCanvasMenu && 'show-offcanvas-menu'}  offcanvas-menu`}>
                <nav className="offcanvas-menu__wrapper">
                    <div className="offcanvas-menu__header nav-fade" style={{animationDelay: '1s'}}>
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} className="h-14" alt="" title="" />
                            </a>
                        </div>
                        <a onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)} aria-label="close offcanvas menu" className="close-offcanvas-menu">
                            <i className="fa fa-light fa-xmark"></i>
                        </a>
                    </div>
                    <div className="offcanvas-menu__list">
                        <div className="navbar__menu">
                            <ul>
                                {menuItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        label={item.label}
                                        subItems={item.subItems || []}
                                        isActive={activeItem === index}
                                        onClick={() => handleItemClick(index)}
                                        elemIndex={index}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="offcanvas-menu__options nav-fade" style={{animationDelay: '2.4s'}}>
                        <Buttons href="/contact-us" title="Let's Talk"/>
                    </div>
                    <div className="offcanvas-menu__social social nav-fade" style={{animationDelay: '2.6s'}}>
                        <SocialMenuList />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default OffCanvasNav
