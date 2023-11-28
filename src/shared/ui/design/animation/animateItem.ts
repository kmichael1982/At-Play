import { RefObject } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export const animateItem = (itemRef: RefObject<HTMLDivElement | null>) => {
    const item = itemRef.current

    if (item) {
        gsap.from(item, {
            scale: 0.9,
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
}