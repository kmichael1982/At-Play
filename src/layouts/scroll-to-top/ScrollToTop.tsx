import React, { useEffect, useState } from 'react'
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
    const [isScrolling, setIsScrolling] = useState(false)

    const handleScroll = () => {
        const offset = 80
        setIsScrolling(window.scrollY > offset)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`progress-wrap ${isScrolling ? 'active-progress' : ''}`} onClick={scrollToTop}>
            <div className="scroll-icon" />
        </div>
    )
}

export default ScrollToTopButton
