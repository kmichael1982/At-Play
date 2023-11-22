import React from 'react'

const BlogItem: React.FC<{
    title: string
    link: string
    image: string
    category: {
        name: string
        link: string
    }
    date: string
}> = ({ title, link, image, category, date }) => (

    <div className="blog__single fade-top">
        <div className="blog__single-thumb topy-tilt">
            <a href={link}>
                <img src={image} alt="Blog Image" />
            </a>
        </div>
        <div className="blog__single-content">
            <h4>
                <a href={link}>{title}</a>
            </h4>
            <div className="blog__single-meta">
                <a href={link} className="sub-title">
                    {category.name}
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
                <p>{date}</p>
            </div>
        </div>
    </div>
)

export default BlogItem