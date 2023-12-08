import React, { useState, useEffect } from 'react'
import './ScrollToTopButton.scss'

const ScrollToTopButton = () => {
    const [ isVisible, setIsVisible ] = useState(false)
    const [ dashOffset, setDashOffset ] = useState(36.2436)

    const handleScroll = () => {
        const scrollY = window.scrollY
        const showScrollButton = scrollY > 100

        setIsVisible(showScrollButton)
        setDashOffset(307.919 - (scrollY / (document.body.scrollHeight - window.innerHeight)) * 307.919)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <button
            className={`progress-wrap ${isVisible ? "active-progress" : ''}`}
            aria-label="scroll indicator"
            title="go to top"
            onClick={scrollToTop}
        >
            <span>
            </span>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: dashOffset }}
                ></path>
            </svg>
        </button>
    )
}

export default ScrollToTopButton