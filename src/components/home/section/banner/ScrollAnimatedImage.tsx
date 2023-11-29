import React, { useEffect, useRef, useState } from 'react'

export const ScrollAnimatedImage: React.FC<{
    imageSrc: any
    altText: string
    className: string
}> = ({ imageSrc, altText, className }) => {
    const [isVisible, setIsVisible] = useState(false)
    const imageRef = useRef<any>(null)

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight
        const elementPosition = imageRef.current.offsetTop

        if (scrollPosition > elementPosition) {
            setIsVisible(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <img
            ref={imageRef}
            src={imageSrc}
            alt={altText}
            className={`banner-one-thumb hidden flex g-ban-one ${className} ${isVisible ? 'visible' : ''}`}
        />
    )
}

export default ScrollAnimatedImage
