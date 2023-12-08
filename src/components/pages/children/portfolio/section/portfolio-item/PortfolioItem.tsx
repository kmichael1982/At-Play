import React, { useEffect, useRef } from 'react'
import { animateItem } from 'utils/hooks/animateItem'

export const PortfolioItem: React.FC<{
    imgSrc: string
    title: string
}> = ({ imgSrc, title }) => {
    const PortfolioItemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(PortfolioItemRef)
    }, [])

    return (
        <div className="portfolio-m__single topy-tilt fade-top" ref={PortfolioItemRef}>
            <div className="thumb">
                <a href="/service-details">
                    <img src={imgSrc} alt="Image" />
                </a>
            </div>
            <div className="content">
                <div className="tr">
                    <a href="/service-details">
                        <i className="fa-solid fa-arrow-right" style={{transform: 'rotate(320deg)'}} />
                        {/*<i className="icon-arrow-top-right"></i>*/}
                    </a>
                </div>
                <h3 className="light-title-lg">
                    <a href="/service-details">{title}</a>
                </h3>
            </div>
        </div>
    )
}
