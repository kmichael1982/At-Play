import React, { useEffect, useRef } from 'react'
import { animateItem } from 'shared/ui/design/animation/animateItem'

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
                <a href="/service-single">
                    <img src={imgSrc} alt="Image" />
                </a>
            </div>
            <div className="content">
                <div className="tr">
                    <a href="/service-single">
                        <i className="fa-solid fa-arrow-right" style={{transform: 'rotate(320deg)'}} />
                        {/*<i className="icon-arrow-top-right"></i>*/}
                    </a>
                </div>
                <h3 className="light-title-lg">
                    <a href="/service-single">{title}</a>
                </h3>
            </div>
        </div>
    )
}
