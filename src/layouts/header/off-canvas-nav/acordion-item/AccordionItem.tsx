import React from 'react'

const AccordionItem: React.FC<{
    label: string
    subItems: any
    isActive: boolean
    onClick: (event: any) => void
}> = ({ label, subItems, isActive, onClick }) => (
    <li className={`navbar__item  nav-fade ${isActive ? 'navbar__item-active' : ''}`} style={{animationDelay: '2.2s'}} >
        <a aria-label="dropdown menu" className="flex navbar__dropdown-label" onClick={onClick}>
            {label}
        </a>
        <ul className={`navbar__sub-menu ${isActive ? 'show-sub-menu' : ''}`}>
            {subItems.map((item: any, index: any) => (
                <li key={index}>
                    <a href={item.link}>{item.label}</a>
                </li>
            ))}
        </ul>
    </li>
)

export default AccordionItem
