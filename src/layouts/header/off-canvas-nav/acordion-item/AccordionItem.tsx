import React, { MouseEventHandler } from 'react'
import { HeaderSubItems } from 'models/header-types/header-types'

interface AccordionItemProps {
    elemIndex: number
    label: string
    subItems: HeaderSubItems[]
    isActive: boolean
    onClick: MouseEventHandler<HTMLAnchorElement>
}

const AccordionItem: React.FC<AccordionItemProps> = ({ elemIndex, label, subItems, isActive, onClick }) => {

    const styles = { display: isActive ? 'block' : 'none' }

    return (
        <li className={`navbar__item ${subItems.length && 'navbar__item--has-children'} nav-fade`} style={{animationDelay: `${1.2 + 0.1*elemIndex}s`}} >
            <a aria-label="dropdown menu" className={`flex navbar__dropdown-label  ${isActive ? 'navbar__item-active' : ''}`} onClick={onClick}>
                {label}
            </a>
            <ul className={`navbar__sub-menu `} style={styles}>
                {subItems.map((item: HeaderSubItems, index: number) => (
                    <li key={index}>
                        <a className="flex" href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default AccordionItem