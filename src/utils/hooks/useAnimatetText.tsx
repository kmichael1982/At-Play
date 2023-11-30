import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface TextAnimationProps {
    text: string
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
    const textRef = useRef<HTMLDivElement | any>(null)

    useEffect(() => {
        const animation = gsap.fromTo(
            textRef.current.children,
            {
                opacity: 0,
                stagger: 0.5,
                x: '100%',
            },
            {
                duration: 0.5,
                opacity: 1,
                x: '00%',
                stagger: 0.025,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 70%',
                    toggleActions: 'restart none none reverse',
                }
            }
        )

        return () => {
            animation.kill()
        }
    }, [])

    return (
        <div ref={textRef} style={{ position: 'relative', display: 'inline-block'}}>
            {text.split('').map((char: string, index: number) => (
                <div
                    style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: 'translate(0px, 0px)'}}
                    key={index}
                >
                    {char === ' ' ? '\u00A0' : char}
                </div>
            ))}
        </div>
    )
}

export default TextAnimation