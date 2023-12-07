import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()

    return (
        <div
            className="service-t-single-wrapper slick-slide"
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
                        <a
                            className="cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate(`${href}?query=${title}`)
                            }}
                        >
                            {title}
                        </a>
                    </h4>
                </div>
                {ulList}
                <div className="cta">
                    <a
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            navigate(`${href}?query=${title}`)
                        }}
                    >
                        <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>
                        {isHovered && <span>{label}</span>}
                    </a>
                </div>
            </div>
        </div>
    )
}
