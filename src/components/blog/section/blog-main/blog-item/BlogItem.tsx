import React, { ReactNode, useEffect, useRef } from 'react'
import { animateItem } from 'shared/ui/design/animation/animateItem'

interface BlogItemProps {
    topElem: ReactNode
    author: string
    date: string
    categoryOne: string
    categoryTwo: string
    title: string
    content: string
}

export const BlogItem: React.FC<BlogItemProps> = ({
   topElem,
   author,
   date,
   categoryOne,
   categoryTwo,
   title,
   content,
}) => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <div
            className="blog-main__single fade-top"
            style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}
            ref={itemRef}
        >
            <div className="thumb">
                {topElem}
                <div className="meta">
                    <div className="meta__left">
                        <p>
                            <strong>Written by :</strong>
                            {author}
                        </p>
                        <span></span>
                        <p>{date}</p>
                    </div>
                    <div className="meta__right">
                        <a href="/blog">{categoryOne}</a>
                        <a href="/blog">{categoryTwo}</a>
                    </div>
                </div>
            </div>
            <div className="content ">
                <h4 className="h4">
                    <a href="/blog-single">{title}</a>
                </h4>
                <p>{content}</p>
                <div className="cta">
                    <a href="/blog-single">
                        {/*<i className="fa-sharp fa-regular fa-arrow-right"></i>*/}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
