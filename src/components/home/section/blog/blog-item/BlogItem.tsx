import React, { useEffect, useRef } from 'react'

import { animateItem } from 'utils/hooks/animateItem'
import { animateItem3D } from 'utils/hooks/animateItem3D'

import { LinkButton } from 'shared/ui/buttons/ButtonUi'

interface BlogItemProps {
    title: string
    link: string
    image: string
    category: Category
    date: string
}

interface Category {
    name: string
    link: string
}

const BlogItem: React.FC<BlogItemProps> = ({ title, link, image, category, date }) => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem3D(itemRef)
        animateItem(itemRef)
    }, [])

    return(
        <div className="blog__single fade-top">
            <div className="blog__single-thumb topy-tilt cursor-pointer" ref={itemRef}>
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