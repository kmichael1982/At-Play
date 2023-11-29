import React from 'react'

export const PortfolioItem: React.FC<{
    imgSrc: string
    title: string
}> = ({ imgSrc, title }) => (
    <div className="portfolio-m__single topy-tilt fade-top">
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