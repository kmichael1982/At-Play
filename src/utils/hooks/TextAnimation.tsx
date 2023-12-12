import React, { useEffect } from 'react'
import gsap from 'gsap'

export const TextAnimation = () => {
    useEffect(() => {
        const tl = gsap.timeline() as any

        tl.staggerFrom(
            '.section__content-cta h2 a span',
            0.5,
            {
                scale: 0,
                transformOrigin: '50% 100%',
                color: 'rgb(255, 255, 255)',
                ease: 'power2.out',
            },
            0.1
        )

        tl.repeat(-1)
        return () => tl.kill()
    }, [])

    return (
        <h2>
            <a href="mailto:info@xpovio.com" className="folks-text">
                <span>i</span>
                <span>n</span>
                <span>f</span>
                <span>o</span>
                <span>@</span>
                <span>x</span>
                <span>p</span>
                <span>o</span>
                <span>v</span>
                <span>i</span>
                <span>o</span>
                <span>.</span>
                <span>c</span>
                <span>o</span>
                <span>m</span>
            </a>
        </h2>
    )
}

export default TextAnimation
