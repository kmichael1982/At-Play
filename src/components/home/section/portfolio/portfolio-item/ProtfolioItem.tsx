import React from 'react'

const PortfolioItem: React.FC<{
    srcImage: string
    title: string
    link: string
}> = ({ srcImage, title, link }) => {
    return (
        <div className="portfolio__single topy-tilt fade-top">
            <a href={link}>
                <img src={srcImage} alt="Image" />
            </a>
            <div className="portfolio__single-content">
                <a href={link}>
                    <i className="fa-solid fa-arrow-right" style={{ transform: ' rotate(315deg)' }}></i>
                </a>
                <h4>
                    <a href={link}>{title}</a>
                </h4>
            </div>
        </div>
    )
}
export default PortfolioItem