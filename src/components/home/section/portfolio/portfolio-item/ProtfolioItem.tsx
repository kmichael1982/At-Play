import React, { useRef, useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const PortfolioItem: React.FC<{
    srcImage: string
    title: string
    link: string
}> = ({ srcImage, title, link }) => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const item = itemRef.current;

        if (item) {
            gsap.from(item, {
                scale: 0.95,
                opacity: 0,
                y: 50,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            })

            gsap.to(item, {
                duration: 0.7,
                scale: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            })
        }
    }, [])

    return (
        <div
            ref={itemRef}
            className="portfolio__single topy-tilt fade-top"
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