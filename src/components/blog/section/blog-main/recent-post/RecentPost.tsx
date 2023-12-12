import React from 'react'

interface RecentPostProps {
    date: string
    image: string
    title: string
    link: string
}

export const RecentPost: React.FC<RecentPostProps> = ({ date, image, title, link }) => (
    <div className="latest-single">
        <div className="latest-thumb">
            <a href={link}>
                <img src={image} alt={`Image for ${title}`} />
            </a>
        </div>
        <div className="latest-content">
            <p>{date}</p>
            <p>
                <a href={link}>{title}</a>
            </p>
        </div>
    </div>
)