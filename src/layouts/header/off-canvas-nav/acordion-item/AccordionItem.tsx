import React, { MouseEventHandler } from 'react'

import useHomePage from 'utils/hooks/useHomePage'
import { HeaderSubItems } from 'models/header-types/header-types'

interface AccordionItemProps {
    elemIndex: number
    label: string
    link: string
    subItems: HeaderSubItems[]
    isActive: boolean
    setActiveItem: (value: number) => void
    onClick: MouseEventHandler<HTMLAnchorElement>
}

const AccordionItem: React.FC<AccordionItemProps> = ({ elemIndex, label, link, subItems, isActive, setActiveItem, onClick }) => {
    const styles = { display: isActive ? 'block' : 'none' }
    const isHomePage = useHomePage()

    return (
        <li className={`navbar__item ${subItems.length && 'navbar__item--has-children'} nav-fade`} style={{animationDelay: `${1.2 + 0.1*elemIndex}s`}} >
            <a
                aria-label="dropdown menu"
                className={`d-flex cursor-pointer ${subItems.length && 'navbar__dropdown-label'} ${isActive && subItems.length ? 'navbar__item-active' : ''}`}
                onMouseEnter={() => !isHomePage && setActiveItem(elemIndex)}
                onMouseLeave={() => !isHomePage && setActiveItem(elemIndex)}
                onClick={onClick}
                href={link ? link : '#'}
            >
                {label}
            </a>
            {
                subItems.length ? (
                    <ul className={`navbar__sub-menu  navbar__sub-menu--lg`} style={styles}>
                        {subItems.map((item: HeaderSubItems, index: number) => (
                            <li key={index}>
                                <a className="flex" href={item.link}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                ) : ''
            }
        </li>
    )
}

export default AccordionItem