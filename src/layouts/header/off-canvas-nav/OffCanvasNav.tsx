import React, { useState } from 'react'
import Logo from 'assets/images/image-removebg-preview.png'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import AccordionItem from './acordion-item/AccordionItem'
import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'
import { menuItems } from '../menuItems'

const OffCanvasNav: React.FC<{
    isOffCanvasMenu: boolean
    setIsOffCanvasMenu: (setIsOffCanvasMenu: boolean)  => void
}> = ({ isOffCanvasMenu, setIsOffCanvasMenu }) => {
    const [ activeItem, setActiveItem ] = useState<number | null>(null)

    const handleItemClick = (index: number | null) => {
        setActiveItem((prevActiveItem) => (prevActiveItem === index ? null : index))
    }

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
                        <a onClick={() => setIsOffCanvasMenu(!isOffCanvasMenu)} aria-label="close offcanvas menu" className="close-offcanvas-menu cursor-pointer">
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
