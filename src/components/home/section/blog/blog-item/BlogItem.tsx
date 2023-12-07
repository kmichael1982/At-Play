import React, { useEffect, useRef, useState } from 'react'

import { animateItem } from 'shared/ui/animation/animateItem'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'

const BlogItem: React.FC<{
    title: string
    link: string
    image: string
    category: {
        name: string
        link: string
    }
    date: string
}> = ({ title, link, image, category, date }) => {
    const [ isHovered, setIsHovered ] = useState(false)
    const itemRef = useRef<HTMLDivElement | null>(null)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const hoverStyles = isHovered
        ? {
            transform: 'perspective(1000px) rotateX(-0.43deg) rotateY(0.2deg) scale3d(1, 1, 1)',
            opacity: 1,
        }
        : {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            opacity: 0.8,
        }

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return(
        <div className="blog__single fade-top" ref={itemRef}>
            <div
                className="blog__single-thumb topy-tilt cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    willChange: 'transform',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                }}
            >
                <a href={link}>
                    <img src={image} alt="Blog Image" />
                </a>
            </div>
            <div className="blog__single-content">
                <h4>
                    <a href={link}>{title}</a>
                </h4>
                <div className="blog__single-meta">
                    <LinkButton
                        isLink={true}
                        label={category.name}
                        className="sub-title mb-0"
                        icon={ <i className="fa-solid fa-arrow-right"></i>}
                        href={link}
                    />
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem