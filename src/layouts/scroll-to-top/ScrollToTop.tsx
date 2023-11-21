import React, { useEffect, useState } from 'react'
import './ScrollToTopButton.scss'

const ScrollToTopButton = () => {
    const [ isScrolling, setIsScrolling ] = useState(false)

    const handleScroll = () => {
        const offset = 80
        setIsScrolling(window.scrollY > offset)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToTopWithTimer = () => {
        setTimeout(() => {
            scrollToTop()
        }, 500)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const pathStyle = {
        transition: 'stroke-dashoffset 10ms linear 0s',
        strokeDasharray: '307.919, 307.919',
        strokeDashoffset: '283.745',
    }

    return (
        <button
            className={`progress-wrap ${isScrolling ? 'active-progress' : ''}`}
            aria-label="scroll indicator"
            title="go to top"
            onClick={scrollToTopWithTimer}
        >
            <span></span>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={pathStyle}></path>
            </svg>
        </button>
    )
}

export default ScrollToTopButton