import React, { useState } from 'react'

import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'
import AccordionItem from '../off-canvas-nav/acordion-item/AccordionItem'
import { menuItems } from '../menuItems'

import Logo from 'assets/images/image-removebg-preview.png'
import './off-canvas-styles.scss'

const OffCanvas: React.FC<{
    isOffCanvasMenu: boolean
    setIsOffCanvasMenu: (setIsOffCanvasMenu: boolean)  => void
}> = ({ isOffCanvasMenu, setIsOffCanvasMenu }) => {
    const [ activeItem, setActiveItem ] = useState<number | null>(null)

    const handleItemClick = (index: any) => {
        setActiveItem((prevActiveItem) => (prevActiveItem === index ? null : index))
    }

    return (
        <div className={`mobile-menu ${isOffCanvasMenu && 'show-menu'}`}>
            <nav className={`${!isOffCanvasMenu && 'nav-fade-active'} mobile-menu__wrapper`}>
                <div className="mobile-menu__header nav-fade">
                    <div className="logo">
                        <a href="/">
                            <img src={Logo} className="h-14" alt="" title="" />
                        </a>
                    </div>
                    <a onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)} aria-label="close mobile menu" className="cursor-pointer close-mobile-menu">
                        <i className="fa fa-light fa-xmark"></i>
                    </a>
                </div>
                <div className="mobile-menu__list">
                    <ul>
                        {menuItems.map((item, index) => (
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
                        ))}
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
