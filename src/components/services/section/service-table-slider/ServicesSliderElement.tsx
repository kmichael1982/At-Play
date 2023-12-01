import React, { ReactNode } from 'react'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'

interface ServiceSliderElementProps {
    index: number
    href: string
    title: string
    label: string
    ulList: ReactNode
    hoveredIndex?: number | null
    onHover: (index: number | null) => void
}

export const ServiceSliderElement: React.FC<ServiceSliderElementProps> = ({ index, href, title, label, ulList, hoveredIndex, onHover }) => {
    const isHovered  = index === hoveredIndex

    return (
        <div
            className="service-t-single-wrapper slick-slide slick-cloned"
            data-slick-index={index}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
            style={{width: "320px"}}
        >
            <div className="service-t__slider-single">
                <div className="intro">
                    <LinkButton
                        isLink={true}
                        label={`0${index+1}`}
                        className="sub-title"
                        icon={<i className="fa-solid fa-arrow-right"></i>}
                        href="#"
                    />
                    <h4>
                        <a href={href}>{title}</a>
                    </h4>
                </div>
                {ulList}
                <div className="cta">
                    <a href={href}>
                        <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>
                        {isHovered && <span>{label}</span>}
                    </a>
                </div>
            </div>
        </div>
    )
}
